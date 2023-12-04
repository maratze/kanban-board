<template>
  <div>
    <label for="password" class="grid">
      <span class="text-md text-slate-800">Password</span>
      <input type="password" name="password"
        class="h-[48px] block mt-2 px-4 border bg-slate-100 border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder-slate-400 placeholder:font-light focus:border-slate-500"
        placeholder="At least 8 characters" :value="props.modelValue" @input="updateValue" />
    </label>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: { type: String, required: true }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>