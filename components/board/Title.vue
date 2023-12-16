<template>
  <h2 class="flex items-center gap-2 px-4 text-md font-medium text-slate-600">
    <Icon :name="iconName ?? ''" />
    <span>{{ text }}</span>
  </h2>
</template>

<script lang="ts" setup>
const props = defineProps({
  iconName: String,
  text: String
})
</script>