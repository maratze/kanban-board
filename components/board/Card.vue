<template>
  <div
    class="flex flex-wrap min-h-[100px] w-full p-4 bg-zinc-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-zinc-400">
    <h3 class="block w-full text-white font-medium break-words leading-4">{{ name }}</h3>
    <p class="flex justify-between items-end w-full">
      <span class="text-white text-xs leading-3">{{ workspaceName }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: String,
  workspaceName: String
})
</script>