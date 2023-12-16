// import type { User } from '~/types/user'
import type { RegisterForm } from '~/types/auth'
import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import * as constants from '~/constants'

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

      const tokens = useCookie<Tokens>(constants.COOKIE_TOKENS_KEY)

      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(response => {
          tokens.value = response.user[constants.STS_TOKEN_MANAGER] || ''

          navigateTo('/', { external: true })
        })
        .catch((error) => {
          switch (error.code) {
            case constants.AUTH_EMAIL_EXIST:
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
