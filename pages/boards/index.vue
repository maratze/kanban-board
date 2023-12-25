<template>
  <div>
    <div class="grid gap-8" v-if="hasData">
      <div v-if="recentlyBoards.length">
        <BoardTitle
          iconName="streamline:fastforward-clock"
          text="Recently" />
        <BoardCardWrapper>
          <BoardCard
            v-for="board of recentlyBoards"
            v-bind:key="board.id"
            :board="board"
            class="text-white" />
        </BoardCardWrapper>
      </div>
      <div v-if="favoritesBoards.length">
        <BoardTitle
          iconName="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars"
          text="Favorites" />
        <BoardCardWrapper>
          <BoardCard
            v-for="board of favoritesBoards"
            v-bind:key="board.id"
            :board="board"
            class="text-white" />
        </BoardCardWrapper>
      </div>
    </div>
    <div v-else>
      <Space
        image-path="/image-1.svg"
        description="To create a board please create a new workspace or add a board to existing workspace.">
      </Space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Board } from '~/types';

definePageMeta({
  middleware: ['auth']
})

const { loadWorkspaces } = useWorkspacesStore()
const { loadBoards } = useBoardsStore()
const { workspaces } = storeToRefs(useWorkspacesStore())
const { boards } = storeToRefs(useBoardsStore())
const { user } = storeToRefs(useUserStore())

const recentlyBoards = computed((): Board[] => {
  const date = new Date(new Date().setDate(-7))

  return boards.value.filter(board => {
    return board.lastVisited && toRaw(board.lastVisited)['seconds'] > date.getSeconds()
  })
})
const favoritesBoards = computed((): Board[] => {
  return boards.value.filter(x => x.favoriteUserIds.includes(user.value.uid))
})
const hasData = computed((): boolean => {
  return recentlyBoards.value.length > 0 || favoritesBoards.value.length > 0
})

loadWorkspaces().then(() => {
  loadBoards(workspaces.value.map(x => x.id))
})
</script>