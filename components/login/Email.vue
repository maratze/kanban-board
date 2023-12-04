<template>
  <div>
    <label for="email" class="grid">
      <span class="text-md text-slate-800">Email</span>
      <input type="text" name="email"
        class="h-[48px] block mt-2 px-4 text-slate-800 border bg-slate-100 border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder-slate-400 placeholder:font-light focus:border-slate-500"
        placeholder="example@mail.com" :value="props.modelValue" @input="updateValue" @change="v$.modelValue.$touch"
        :class="{
          'border-1 border-red-400 focus:border-red-400': v$.modelValue.$error,
          'border-green-500': !v$.modelValue.$invalid,
        }" />
      <div v-for="error of v$.modelValue.$errors" :key="error.$uid">
        <div class="mt-1 text-sm text-red-400">{{ error.$message }}</div>
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const props = defineProps({
  modelValue: { type: String, required: true }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const rules = computed(() => {
  return {
    modelValue: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email)
    }
  };
});
const v$ = useVuelidate(rules, props);
</script>