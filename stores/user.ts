import { defineStore } from 'pinia'
import type { User, UserStore } from '~/types/user'

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    user: {} as User
  }),
  actions: {
    setUserId(uid: string) {
      this.user.uid = uid
    }
  }
})
