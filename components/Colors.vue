<template>
  <div>
    <span class="text-md text-slate-800">Background color</span>
    <div class="flex flex-wrap gap-1 mt-2">
      <div
        v-for="color of colors"
        class="w-12 h-12 rounded-md border-2 border-white cursor-pointer transition-all duration-200 hover:scale-110"
        :class="{
          'outline outline-2 outline-slate-400': modelValue === color
        }"
        :style="`background-color: ${color};`"
        :value="color"
        @click.prevent="selectColor(color)"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { colors } from '~/constants';

defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const selectColor = (color) => {
  emit('update:modelValue', color)
}
</script>