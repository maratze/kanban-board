import { defineStore } from 'pinia'
import type { RegisterForm } from '~/types/auth'

export const useSignupStore = defineStore('signup', {
  state: (): RegisterForm => ({
    email: '',
    password: '',
    repeatPassword: ''
  }),
  getters: {
  },
  actions: {
  }
})
