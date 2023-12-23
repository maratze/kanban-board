import { defineStore } from 'pinia'
import type { Board, BoardsStore } from '~/types'
import { BOARDS, WORKSPACES_PATH } from '~/constants';
import { collection, query, where, getDocs, orderBy, addDoc } from 'firebase/firestore';

export const useBoardsStore = defineStore('boardsStore', {
  state: (): BoardsStore => ({
    boards: [],
    isBdLoaded: false,
    isBdLoading: false
  }),
  actions: {
    async loadBoards(workspaceIds: string[]) {
      if (this.isBdLoading) {
        return
      }

      this.isBdLoading = true

      if (!workspaceIds.length || this.boards.length) {
        this.isBdLoaded = true
        return
      }

      this.isBdLoaded = false
      this.boards = []

      const db = useFirestore()
      const boardsQuery = query(
        collection(db, BOARDS),
        where('workspaceId', 'in', workspaceIds),
        orderBy('name')
      )

      await getDocs(boardsQuery)
        .then(data => {
          data.docs.forEach((doc) => {
            const board = doc.data() as Board
            board.id = doc.id
            this.boards.push(board)
          })
        })
        .catch(ex => useNuxtApp().$toast.error('Failed to load boards. Code: ' + ex.code))
        .finally(() => {
          this.isBdLoaded = true
          this.isBdLoading = false
        })
    },
    async addBoard(board: Board) {
      this.isBdLoading = true

      try {
        await addDoc(collection(useFirestore(), 'boards'), board)
        this.boards.push(board)
        navigateTo(WORKSPACES_PATH + '/' + board.workspaceId + '/boards')
      }
      catch (ex) {
        useNuxtApp().$toast.error('Something went wrong with creating a new board')
      }
      finally {
        this.isBdLoading = false
      }
    }
  }
})
