<template>
  <button
    class="h-[52px] flex items-center justify-center gap-4 w-full text-slate-800 rounded-lg bg-slate-100 transition-all duration-200 hover:bg-slate-200">
    <span class="block w-7 h-7">
      <img src="@/assets/icons/google-logo.svg" class="w-full h-full" />
    </span>
    {{ props.text }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: { type: String, required: true }
})
</script>