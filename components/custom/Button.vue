<template>
  <button
    :disabled="disabled"
    :class="{
      'bg-slate-200 hover:bg-slate-200': disabled,
      'bg-slate-800 hover:bg-slate-700': !disabled && !isCustomColor
    }"
    class="h-[52px] flex items-center justify-center w-full text-white rounded-lg transition-all duration-200 ">
    {{ props.text ?? '' }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String,
  disabled: Boolean,
  loading: Boolean,
  isCustomColor: Boolean
})
</script>