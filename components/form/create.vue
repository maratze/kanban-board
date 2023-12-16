<template>
  <div class="max-w-xl p-6 border border-slate-300 rounded-lg bg-white">
    <h1 class="font-medium text-xl">{{ title }}</h1>
    <p class="mt-2 text-md text-slate-400 leading-5">{{ description }}</p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String
})
</script>

<style></style>