<template>
  <div>
    <HeaderLogo />
    <h2 class="flex gap-4 mt-8 text-2xl sm:text-4xl font-bold text-slate-800">
      <span>{{ title }}</span>
      <slot />
    </h2>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true }
})
</script>