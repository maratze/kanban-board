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
      }
      catch (ex) {
        useNuxtApp().$toast.error('Something went wrong with adding the board to the favorite list')
      }
    },
    async updateLastVisited(board: Board | undefined) {
      if (!board) {
        return
      }

      const boardRef = doc(collection(useFirestore(), BOARDS), board.id)

      await updateDoc(boardRef, {
        lastVisited: board.lastVisited
      })
    }
  }
})
