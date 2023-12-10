<template>
  <div>
    <SignupWrapper>
      <CustomInput
        type="text"
        id="email"
        label="Email"
        placeholder="example@mail.com"
        v-model="store.email"
        :v="v$.email"
        @submit="nextStep" />
      <LoginButton
        text="Continue"
        :disabled="v$.email.$invalid"
        @click.prevent="nextStep"
        class="mt-4" />
    </SignupWrapper>
  </div>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { AUTH_SIGNUP_PATH } from '~/constants';

definePageMeta({
  layout: 'empty',
  middleware: ['sign']
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

  navigateTo(AUTH_SIGNUP_PATH + '/step/password')
}
</script>