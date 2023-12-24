import { defineStore } from 'pinia'
import { BOARDS } from '~/constants'
import type { Board } from '~/types'
import { collection, query, where, getDocs, orderBy, updateDoc, doc } from 'firebase/firestore'

export const useBoardStore = defineStore('boardStore', {
  state: () => ({

  }),
  actions: {
    async favoriteBoard(board: Board | undefined) {
      if (!board) {
        return
      }

      try {
        const boardRef = doc(collection(useFirestore(), BOARDS), board.id)

        await updateDoc(boardRef, {
          favoriteUserIds: board.favoriteUserIds
        })
        // this.boards.push(board)
        // navigateTo(WORKSPACES_PATH + '/' + board.workspaceId + '/boards')
      }
      catch (ex) {
        useNuxtApp().$toast.error('Something went wrong with creating a new board')
      }
    }
  }
})
