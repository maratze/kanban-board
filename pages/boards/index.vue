<template>
  <div class="grid gap-8">
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
</template>

<script lang="ts" setup>
import type { Timestamp } from 'firebase/firestore';
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

loadWorkspaces().then(() => {
  loadBoards(workspaces.value.map(x => x.id))
})
</script>