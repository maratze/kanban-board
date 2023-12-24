<template>
  <div>
    <div class="flex items-center gap-4 p-4 min-h-[82px] bg-white rounded-lg border border-slate-300">
      <template v-if="workspace">
        <div 
        class="flex justify-center items-center min-w-[48px] min-h-[48px] text-2xl text-white rounded-md"
        :style="`background-color: ${workspace.color};`">
          {{ useFirstLetter(workspace?.name) }}
        </div>
        <div>
          <p class="block w-full text-lg font-medium leading-4">{{ workspace?.name }}</p>
          <p class="flex items-center gap-1 w-full mt-2 text-sm text-slate-400">
            <Icon name="material-symbols:lock-open-outline" />
            <span>Private</span>
          </p>
        </div>
      </template>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { Workspace } from '~/types';

defineProps<{
  workspace: Workspace
}>()
</script>