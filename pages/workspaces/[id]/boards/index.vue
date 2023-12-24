<template>
  <div>
    <WorkspaceBlock :workspace="workspace" />
    <Transition>
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
            :color="board.color"
            class="text-white" />
          <BoardCardCreate @click.prevent="goToCreate" />
        </BoardCardWrapper>
      </div>
    </Transition>
    <Space
      v-if="isLoaded && !boards.length"
      image-path="/image-2.svg"
      description="Boards are the main workspaces in Worker. You can use them to move cards between columns to keep track of projects, tasks, and more.">
      <CustomButton text="Create a new board" class="mt-8 w-full max-w-xs m-auto" @click.prevent="goToCreate" />
    </Space>
  </div>
</template>

<script lang="ts" setup>
import { WORKSPACES_PATH } from '~/constants';
import { useWorkspaceStore } from '~/stores/workspace';

definePageMeta({
  middleware: ['auth']
})

const route = useRoute()
const { workspace, boards, isLoaded } = storeToRefs(useWorkspaceStore())
const { loadWorkspace } = useWorkspaceStore()

await loadWorkspace(route.params.id as string)

const goToCreate = () => {
  navigateTo(WORKSPACES_PATH + '/' + route.params.id + '/boards/create')
}
</script>