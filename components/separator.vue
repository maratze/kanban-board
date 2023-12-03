<template>
  <div class="relative flex justify-center items-center w-full h-px bg-slate-300">
    <span v-if="props.text" class="p-2 text-slate-800 bg-white">{{ props.text }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String
})
</script>