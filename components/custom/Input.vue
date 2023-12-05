<template>
  <div>
    <label :for="name" class="grid">
      <span class="text-md text-slate-800">{{ label }}</span>
      <input
        :id="id"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="changeValue"
        @change="v$.modelValue.$touch"
        class="h-[48px] block mt-2 px-4 text-slate-800 border bg-slate-100 rounded-lg outline-none transition-all duration-200 placeholder-slate-400 placeholder:font-light"
        :class="{
          'border-slate-300 focus:border-slate-500': !v$.modelValue.$error,
          'border-red-400 focus:border-red-400': v$.modelValue.$error,
          'border-green-400 focus:border-green-400': !v$.modelValue.$invalid,
        }">
      <template v-if="validationRules">
        <span
          v-for="error of v$.modelValue.$errors"
          :key="error.$uid"
          class="block">
          <span class="mt-1 text-sm text-red-400">{{ error.$message }}</span>
        </span>
      </template>

    </label>
  </div>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';

const props = defineProps({
  modelValue: String,
  name: String,
  id: String,
  label: String,
  placeholder: String,
  type: { type: String, required: true },
  validationRules: { type: Object }
})

const emit = defineEmits(['update:modelValue'])

const changeValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const rules = computed(() => props.validationRules)
const v$ = useVuelidate(rules, props);
</script>