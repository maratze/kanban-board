import type { User } from '~/types/user'

export const useUser = () => {
  return useState<User | null>('user', () => null)
}
