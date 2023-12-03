<template>
  <div>
    <button
      class="h-[52px] flex items-center justify-center w-full text-white rounded-lg bg-slate-800 transition-all duration-200 hover:bg-slate-700">
      {{ props.text ?? 'Sign in' }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String
})
</script>