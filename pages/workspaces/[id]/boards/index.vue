<template>
  <WorkspaceBlock :workspace="(workspace as Workspace)" />
  <div
    v-if="boards.length"
    class="mt-4">
    <BoardTitle
      iconName="streamline:fastforward-clock"
      text="My boards" />
    <BoardCardWrapper>
      <BoardCard
        v-for="board of boards"
        v-bind:key="board.id"
        :name="board.name"
        class="text-white" />
      <BoardCardCreate @click.prevent="goToCreate" />
    </BoardCardWrapper>
  </div>
  <Space
    v-else
    image-path="/image-2.svg"
    description="Boards are the main workspaces in Worker. You can use them to move cards between columns to keep track of projects, tasks, and more.">
    <CustomButton text="Create a new board" class="mt-8 w-full max-w-xs m-auto" @click.prevent="goToCreate" />
  </Space>
</template>

<script lang="ts" setup>
import { collection, query, where, getDocs, doc } from 'firebase/firestore';
import { BOARDS, WORKSPACES, WORKSPACES_PATH } from '~/constants';
import type { Board, Workspace } from '~/types';

definePageMeta({
  middleware: ['auth']
})

const route = useRoute()
const boards = ref([] as Board[])
const workspace = useDocument(doc(collection(useFirestore(), WORKSPACES), useRoute().params.id as string))

const q = query(collection(useFirestore(), BOARDS), where('workspaceId', '==', route.params.id))
const querySnapshot = await getDocs(q)

querySnapshot.forEach((doc) => {
  const board = doc.data() as Board
  board.id = doc.id
  boards.value.push(board)
})

const goToCreate = () => {
  navigateTo(WORKSPACES_PATH + '/' + route.params.id + '/boards/create')
}
</script>