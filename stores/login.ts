import type { LoginForm } from '~/types/auth'
import type { User } from '~/types/user'
import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import * as constants from '~/constants'

export const useLoginStore = defineStore('login', {
  state: (): LoginForm => ({
    email: 'maratoff20@gmail.com', // will be reset to an empty string
    password: '123123', // will be reset to an empty string
    isProcessing: false
  }),
  actions: {
    login(): void {
      this.isProcessing = true

      const tokens = useCookie<Tokens>(constants.COOKIE_TOKENS_KEY)

      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(response => {
          tokens.value = response.user[constants.STS_TOKEN_MANAGER] || ''

          navigateTo('/', { external: true })
        })
        .catch((error) => {
          switch (error.code) {
            case constants.AUTH_INVALID_EMAIL:
              useNuxtApp().$toast.error('Invalid email')
              break
            case constants.AUTH_USER_NOT_FOUND:
              useNuxtApp().$toast.error('No account with that email was found')
              break
            case constants.AUTH_WRONG_PASSWORD:
              useNuxtApp().$toast.error('Incorrect password')
              break
            default:
              useNuxtApp().$toast.error('Email or password was incorrect')
              break
          }
        })
        .finally(() => {
          this.isProcessing = false
        })
    }
  }
})
