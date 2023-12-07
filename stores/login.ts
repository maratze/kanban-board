import { defineStore } from 'pinia'
import type { LoginForm } from '~/types/auth'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const useLoginStore = defineStore('login', {
  state: (): LoginForm => ({
    email: 'maratoff20@gmail.com',
    password: '123123_',
    isProcessing: false
  }),
  actions: {
    login(): void {
      this.isProcessing = true

      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          // uid
          // accessToken
          // stsTokenManager.accessToken
          // stsTokenManager.expirationTime
          // stsTokenManager.refreshToken
          // stsTokenManager.isExpired
          debugger
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-credential':
              useNuxtApp().$toast.error('Entered email or password is incorrect.')
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
