export interface User {
    uid: string
    email: string
    emailVerified: boolean
    phoneNumber: string
    photoURL: string
}

export interface UserStore {
    readonly user: User
}