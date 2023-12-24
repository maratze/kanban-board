import { defineStore } from 'pinia'
import type { Workspace, WorkspacesStore } from '~/types'
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { WORKSPACES } from '~/constants';

export const useWorkspacesStore = defineStore('workspacesStore', {
  state: (): WorkspacesStore => ({
    workspaces: [],
    isWsLoaded: false,
    isWsLoading: false
  }),
  actions: {
    async loadWorkspaces() {
      if (this.isWsLoading) {
        return
      }

      this.isWsLoading = true
      this.isWsLoaded = false

      const q = query(
        collection(useFirestore(), WORKSPACES),
        where('userIds', 'array-contains', useUserStore().user.uid),
        orderBy('name')
      )
      await getDocs(q)
        .then(data => {
          this.workspaces = []

          data.docs.forEach((doc) => {
            const workspace = doc.data() as Workspace
            workspace.id = doc.id
            this.workspaces.push(workspace)
          })
        })
        .catch(ex => useNuxtApp().$toast.error('Failed to load workspaces. Code: ' + ex.code))
        .finally(() => {
          this.isWsLoaded = true
          this.isWsLoading = false
        })
    }
  }
})
