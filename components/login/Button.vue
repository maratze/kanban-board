<template>
  <div>
    <button
      :disabled="disabled"
      :class="{
        'bg-slate-200 hover:bg-slate-200': disabled,
        'bg-slate-800 hover:bg-slate-700': !disabled
      }"
      class="h-[52px] flex items-center justify-center w-full text-white rounded-lg  transition-all duration-200 ">
      <template v-if="loading">
        <BeatLoader size="10px" color="white" class="flex items-center justify-center" />
      </template>
      <template v-else>
        {{ props.text ?? 'Sign in' }}
      </template>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { BeatLoader } from 'vue3-spinner';

const props = defineProps({
  text: String,
  disabled: Boolean,
  loading: Boolean
})
</script>