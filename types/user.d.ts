export interface User {
    uid: string
    email: string
    emailVerified: boolean
    phoneNumber: string
    photoURL: string
    // workspaceIds: string
    // favouriteBoards: string[]
}

export interface UserStore {
    readonly user: User
}