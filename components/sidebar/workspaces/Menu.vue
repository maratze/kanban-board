<template>
  <div
    v-if="isWsLoaded && workspaces.length"
    class="grid gap-1">
    <div
      v-for="workspace of workspaces"
      v-bind:key="workspace.id">
      <div
        class="workspace flex justify-between items-center gap-2 p-2 text-slate-600 rounded-md transition-all cursor-pointer hover:bg-slate-100"
        :class="[{ 'menu-visible': workspace.id === route.params.id || workspace['isMenuVisible'] }]"
        @click.prevent="toggleMenuVisible(workspace as Workspace)">
        <div class="flex items-center gap-2">
          <div
            class="flex justify-center items-center min-w-[24px] min-h-[24px] text-xs text-white rounded-md"
            :style="`background-color: ${workspace.color};`">
            {{ useFirstLetter(workspace.name) }}</div>
          <span class="text-md font-medium leading-4">{{ workspace.name }}</span>
        </div>
        <div class="relative">
          <span
            class="left-line relative block w-2 h-[2px] -left-[5px] top-[2px] rounded-full bg-slate-500 transition-all duration-300"></span>
          <span
            class="right-line relative block w-2 h-[2px] rounded-full bg-slate-500 transition-all duration-300"></span>
        </div>
      </div>
      <div class="dropdown-menu">
        <ul class="grid mt-2">
          <li>
            <NuxtLink :to="WORKSPACES_PATH + '/' + workspace.id + '/boards'"
              activeClass="text-slate-600 bg-slate-100 pointer-events-none"
              class="flex justify-start items-center gap-2 py-2 px-3 pl-8 text-slate-600 rounded-md transition-all hover:bg-slate-100">
              <Icon name="streamline:dashboard-3" class="text-sm" />
              <span class="text-sm">Boards</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="WORKSPACES_PATH + '/' + workspace.id + '/users'"
              activeClass="text-slate-600 bg-slate-100 pointer-events-none"
              class="flex justify-start items-center gap-2 py-2 px-3 pl-8 text-slate-600 rounded-md transition-all hover:bg-slate-100">
              <Icon name="streamline:interface-user-multiple-close-geometric-human-multiple-person-up-user"
                class="text-md" />
              <span class="text-sm">Users</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="WORKSPACES_PATH + '/' + workspace.id + '/settings'"
              activeClass="text-slate-600 bg-slate-100 pointer-events-none"
              class="flex justify-start items-center gap-2 py-2 px-3 pl-8 text-slate-600 rounded-md transition-all hover:bg-slate-100">
              <Icon name="streamline:cog" class="text-md" />
              <span class="text-sm">Settings</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { WORKSPACES_PATH } from '~/constants';
import { useWorkspacesStore } from '~/stores/workspaces';
import type { Workspace } from '~/types';

const route = useRoute()
const { loadWorkspaces } = useWorkspacesStore()
const { workspaces, isWsLoaded } = storeToRefs(useWorkspacesStore())

onMounted(async () => {
  if (!workspaces.value.length) {
    await loadWorkspaces()
  }
})

const toggleMenuVisible = (workspace: Workspace) => {
  workspace['isMenuVisible'] = !workspace['isMenuVisible']
}
</script>

<style lang="scss" scoped>
.workspace {
  &.menu-visible {
    &~.dropdown-menu {
      display: block;
    }

    .left-line {
      transform: rotate(-45deg);
    }

    .right-line {
      transform: rotate(45deg);
    }
  }

  &~.dropdown-menu {
    display: none;
  }

  .left-line {
    transform: rotate(45deg);
  }

  .right-line {
    transform: rotate(-45deg);
  }
}
</style>