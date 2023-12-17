import { defineStore } from 'pinia'
import type { Board, BoardsStore } from '~/types'
import { BOARDS } from '~/constants';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

export const useBoardsStore = defineStore('boardsStore', {
  state: (): BoardsStore => ({
    boards: [],
    isLoaded: false
  }),
  actions: {
    async load(workspaceIds: string[]) {
      if (!workspaceIds.length) {
        this.isLoaded = true
        return
      }

      this.isLoaded = false
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
        .finally(() => this.isLoaded = true)
    }
  }
})
