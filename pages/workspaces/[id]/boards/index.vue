<template>
  <WorkspaceWrapper>
    <div
      v-if="boards.length"
      class="mt-4">
      <BoardTitle
        iconName="streamline:fastforward-clock"
        text="My boards" />
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
        <BoardCard
          v-for="board of boards"
          v-bind:key="board.id"
          :name="board.name"
          class="text-white" />
        <BoardCardCreate @click.prevent="goToCreate" />
      </div>
    </div>
    <Space
      v-else
      image-path="/image-2.svg"
      description="Boards are the main workspaces in Worker. You can use them to move cards between columns to keep track of projects, tasks, and more.">
      <CustomButton text="Create a new board" class="mt-8 w-full max-w-xs m-auto" @click.prevent="goToCreate" />
    </Space>
  </WorkspaceWrapper>
</template>

<script lang="ts" setup>
import { collection, query, where, getDocs } from 'firebase/firestore';
import { WORKSPACES_PATH } from '~/constants';
import type { Board } from '~/types';

const route = useRoute()
const boards = ref([] as Board[])

const q = query(collection(useFirestore(), "boards"), where("workspaceId", "==", route.params.id))
const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  const board = doc.data() as Board
  board.id = doc.id
  boards.value.push(board)
})

const goToCreate = () => {
  navigateTo(WORKSPACES_PATH + '/' + route.params.id + '/boards/create')
}
</script>