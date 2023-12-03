<template>
  <div>
    <div class="mt-8 flex justify-center gap-2 w-full">
      <div>{{ props.title }}</div>
      <NuxtLink :to="props.link" class="text-md text-blue-600 border-blue-600 hover:underline">{{ props.linkText }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  link: { type: String, required: true },
  linkText: { type: String, required: true }
})
</script>