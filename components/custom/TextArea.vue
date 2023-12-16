<template>
  <div>
    <label :for="name" class="grid">
      <span class="text-md text-slate-800">{{ label }}</span>
      <textarea
        :id="id"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @keypress="submitByEnter"
        @input="inputValue"
        @change="v?.$touch"
        class="h-[144px] block mt-2 py-3 px-4 text-slate-800 border bg-slate-100 rounded-lg outline-none transition-all duration-200 placeholder-slate-400 placeholder:font-light resize-none"
        :class="{
          'border-slate-300 focus:border-slate-500': !v?.$error,
          'border-red-400 focus:border-red-400': v?.$error,
          'border-green-600 focus:border-green-600': !v?.$invalid
        }">
      </textarea>
      <span class="mt-2 text-sm text-slate-400">{{ text }}</span>
      <template v-if="v?.$error">
        <span
          v-for="error of v?.$errors"
          :key="error.$uid"
          class="block">
          <span class="mt-1 text-sm text-red-400">{{ error.$message }}</span>
        </span>
      </template>
    </label>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: String,
  type: String,
  id: String,
  name: String,
  label: String,
  text: String,
  placeholder: String,
  disabled: Boolean,
  v: Object
})

const emit = defineEmits(['update:modelValue', 'submit'])

const inputValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const submitByEnter = (event: KeyboardEvent) => {
  if (event.code === 'Enter') {
    emit('submit')
  }
}
</script>