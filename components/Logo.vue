<template>
  <NuxtLink :to="to ?? BOARDS_PATH"
    class="flex items-center justify-start gap-2 text-slate-800 h-full transition-all hover:text-slate-500">
    <Icon name="streamline:interface-edit-color-palette-color-palette-company-office-supplies-work" class="text-lg" />
    <span class="text-md font-medium uppercase">Worker</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { BOARDS_PATH } from '~/constants';

const props = defineProps({
  to: String
})
</script>