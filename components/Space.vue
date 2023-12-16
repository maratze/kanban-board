<template>
  <div class="flex justify-center items-center flex-wrap max-w-xl mt-8 m-auto">
    <img :src="imagePath" class="block w-2/1">
    <p class="block mt-8 text-center text-slate-400 leading-5">{{ description }}</p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  imagePath: String,
  description: String
})
</script>