<template>
  <div>
    <p class="text-sm text-slate-500">Menu</p>
    <ul class="grid gap-1 mt-4">
      <li>
        <NuxtLink :to="BOARDS_PATH" activeClass="text-slate-600 bg-slate-100 pointer-events-none"
          class="flex justify-start items-center gap-2 py-3 px-3 text-slate-600 rounded-md transition-all hover:bg-slate-100">
          <Icon name="streamline:dashboard-3" class="text-md" />
          <span class="text-sm font-medium">Boards</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { BOARDS_PATH } from '~/constants';
</script>