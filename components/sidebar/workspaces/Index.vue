<template>
  <div>
    <div class="flex justify-between items-center">
      <p class="text-sm text-slate-500">Workspaces</p>
      <button>
        <IconsPlus
          @click.prevent="navigateTo(WORKSPACES_PATH + '/create')"
          class="relative -left-[2px] flex justify-center items-center w-6 h-6 text-xs text-slate-500 rounded-md transition-all duration-300 hover:bg-slate-200" />
      </button>
    </div>
    <SidebarWorkspacesMenu class="mt-4" />
  </div>
</template>

<script lang="ts" setup>
import { WORKSPACES_PATH } from '@/constants/index'
</script>