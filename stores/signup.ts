import type { User } from '~/types/user'
import type { RegisterForm } from '~/types/auth'
import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { AUTH_EMAIL_EXIST, COOKIE_TOKENS_KEY, STS_TOKEN_MANAGER } from '~/constants'

export const useSignupStore = defineStore('signup', {
  state: (): RegisterForm => ({
    email: '',
    password: '',
    repeatPassword: '',
    isProcessing: false
  }),
  actions: {
    signup(): void {
      this.isProcessing = true

      const user$ = useUser()
      const tokens$ = useCookie<Tokens>(COOKIE_TOKENS_KEY)

      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(response => {
          user$.value = response.user as User
          tokens$.value = response.user[STS_TOKEN_MANAGER] || ''

          navigateTo('/boards')
        })
        .catch((error) => {
          switch (error.code) {
            case AUTH_EMAIL_EXIST:
              useNuxtApp().$toast.error('The email address is already in use by another account.')
              break
            default:
              useNuxtApp().$toast.error(error.message)
              break
          }
        })
        .finally(() => {
          this.isProcessing = false
        })
    }
  }
})
