<template>
  <div>
    <div class="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-300">
      <div class="flex justify-center items-center min-w-[48px] min-h-[48px] text-2xl text-white rounded-md bg-red-400">{{
        useFirstLetter(workspace?.name) }}</div>
      <div>
        <p class="block w-full text-lg font-medium leading-4">{{ workspace?.name }}</p>
        <p class="flex items-center gap-1 w-full mt-2 text-sm text-slate-400">
          <Icon name="material-symbols:lock-open-outline" />
          <span>Private</span>
        </p>
      </div>
    </div>
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
          :name="board.name" />
      </div>
    </div>
    <Space
      v-else
      image-path="/image-2.svg"
      description="Boards are the main workspaces in Worker. You can use them to move cards between columns to keep track of projects, tasks, and more.">
      <CustomButton text="Create a new board" class="mt-8 w-full max-w-xs m-auto" />
    </Space>
  </div>
</template>

<script lang="ts" setup>
import { collection, query, where, getDocs, doc } from 'firebase/firestore';
import type { Board } from '~/types';

const route = useRoute()
const db = useFirestore()

const workspace = useDocument(doc(collection(db, 'workspaces'), route.params.id as string))
const boards = ref([] as Board[])

const q = query(collection(db, "boards"), where("workspaceId", "==", route.params.id))
const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  const board = doc.data() as Board
  board.id = doc.id
  boards.value.push(board)
})
</script>