import { doc, collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { BOARDS, WORKSPACES } from '~/constants'
import type { Board, Workspace, WorkspaceStore } from '~/types'

export const useWorkspaceStore = defineStore('workspaceStore', {
  state: (): WorkspaceStore => ({
    workspace: {} as Workspace,
    boards: [] as Board[],
    isLoaded: false,
    isLoading: false
  }),
  actions: {
    async loadWorkspace(id: string) {
      if (this.isLoading) {
        return
      }

      this.isLoading = true
      this.isLoaded = false

      if (!id) {
        return
      }

      const { promise } = useDocument(doc(collection(useFirestore(), WORKSPACES), id))
      promise.value.then(x => {
        this.workspace = x as Workspace
      })

      if (this.workspace) {
        this.boards = []

        const q = query(
          collection(useFirestore(), BOARDS), 
          where('workspaceId', '==', id),
          orderBy('name'))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc) => {
          const board = doc.data() as Board
          board.id = doc.id
          this.boards.push(board)
        })
      }

      this.isLoading = false
      this.isLoaded = true
    }
  }
})
