import { defineStore } from 'pinia'
import type { RegisterForm } from '~/types/auth'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignupStore = defineStore('signup', {
  state: (): RegisterForm => ({
    email: 'maratoff20@gmail.com',
    password: '123123',
    repeatPassword: '123123',
    isProcessing: false
  }),
  actions: {
    signup(): void {
      this.isProcessing = true

      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
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
            case 'auth/email-already-in-use':
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
