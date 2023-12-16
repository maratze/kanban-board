import { getAuth } from 'firebase/auth'
import { useUserStore } from '~/stores/user'

export const useIsLoggedIn = () => {
  return useState('isLoggedIn', () => new Promise((resolve, _) => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        const userStore = useUserStore()
        userStore.setUserId(user?.uid)

        return resolve(true)
      }

      return resolve(false)
    })
  }))
}
