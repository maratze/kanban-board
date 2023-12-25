export enum VisibleType {
    Private,
    Workspace,
    Public
}

export interface Workspace {
    id: string
    name: string
    description: string
    color: string
    visible: VisibleType
    userIds: string[]
}

export interface WorkspacesStore {
    workspaces: Workspace[]
    isWsLoaded: boolean
    isWsLoading: boolean
}

export interface WorkspaceStore {
    workspace: Workspace
    boards: Board[]
    isLoaded: boolean
    isLoading: boolean
}

export interface Board {
    id: string
    name: string
    color: string
    lastVisited: Date | null
    workspaceId: string
    favoriteUserIds: string[]
}

export interface BoardsStore {
    boards: Board[]
    isBdLoaded: boolean
    isBdLoading: boolean
}