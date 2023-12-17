export enum VisibleType {
    Private,
    Workspace,
    Public
}

export interface Workspace {
    id: string
    name: string
    description: string
    visible: VisibleType
    userIds: string[]
}

export interface WorkspacesStore {
    workspaces: Workspace[]
    isLoaded: boolean
}

export interface Board {
    id: string
    name: string
    color: string
    workspaceId: string
}

export interface BoardsStore {
    boards: Board[],
    isLoaded: boolean
}