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

export interface Board {
    id: string
    name: string
    workspaceId: string
}