import { getAuth } from "firebase/auth"

export const useIsLoggedIn = () => {
  return useState('isLoggedIn', () => new Promise((resolve, _) => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        return resolve(true)
      }

      return resolve(false)
    })
  }))
}
