<template>
  <div>
    <CustomInput
      type="text"
      id="email"
      label="Email"
      placeholder="example@mail.com"
      v-model="store.email"
      :v="v$.email" />
    <LoginButton
      text="Continue"
      :disabled="v$.email.$invalid"
      @click.prevent="nextStep"
      class="mt-4" />
  </div>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

definePageMeta({
  layout: 'signup' as MaybeRef
})

const store = useSignupStore()

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email)
    },
  }
})

const v$ = useVuelidate(rules, store)

const nextStep = (): void => {
  if (v$.value.email.$invalid) {
    return
  }

  navigateTo('/auth/signup/step/password')
}
</script>