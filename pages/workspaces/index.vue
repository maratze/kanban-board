<template>
  <div
    v-if="isLoaded">
    <div
      v-if="workspaces.length"
      class="grid gap-4">
      <div
        v-for="workspace of workspaces"
        v-bind:key="workspace.id">
        <WorkspaceBlock :workspace="workspace" />
        <BoardCardWrapper>
          <BoardCard
            v-for="board of boards.filter((x: Board) => x.workspaceId === workspace.id)"
            v-bind:key="board.id"
            :name="board.name"
            class="text-white" />
          <BoardCardCreate @click.prevent="goToCreateBoard(workspace.id)" />
        </BoardCardWrapper>
      </div>
    </div>
    <div v-else>
      <Space
        image-path="/image-1.svg"
        description="The workspace allows you to organize teamwork, create boards and structure your projects.">
        <CustomButton text="Create a new workspace" class="mt-8 w-full max-w-xs m-auto" @click.prevent="goToCreate()" />
      </Space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WORKSPACES_PATH } from '~/constants';
import type { Board } from '~/types';

definePageMeta({
  middleware: ['auth']
})

const goToCreate = () => {
  navigateTo(WORKSPACES_PATH + '/create')
}

const goToCreateBoard = (workspaceId: string) => {
  navigateTo(WORKSPACES_PATH + '/' + workspaceId + '/boards/create')
}

const { workspaces, isLoaded } = storeToRefs(useWorkspacesStore())
const { boards } = storeToRefs(useBoardsStore())
// const bStore = useBoardsStore()

// if (workspaces.value.length > 0) {
//   console.log('URA')
// }

// workspacesStore.load()
// onUpdated(() => {
//   boardsStore.load(workspacesStore.workspaces.map(x => x.id))
// })
</script>