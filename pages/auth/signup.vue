<template>
  <div>
    <LoginHeader title="Sign up"></LoginHeader>
    <LoginHeaderDescription>Sign up to create your first project</LoginHeaderDescription>
    <div class="mt-8">
      <template v-if="data.step === RegisterStep.InputEmail">
        <CustomInput
          type="text"
          id="email"
          label="Email"
          placeholder="example@mail.com"
          v-model="data.email"
          :v="v$.email" />
      </template>
      <template v-else-if="data.step === RegisterStep.InputPassword">
        <span class="flex justify-between items-center">
          <span>{{ data.email }}</span>
          <span class="text-sm text-blue-600 border-blue-600 cursor-pointer hover:underline"
            @click.prevent="back">Back</span>
        </span>
        <CustomInput
          type="password"
          id="password"
          label="Password"
          placeholder="At least 6 characters"
          v-model="data.password"
          :v="v$.password"
          class="mt-4" />
      </template>
      <LoginButton
        :text="btnContinue.text"
        :disabled="btnContinue.disabled"
        @click.prevent="register"
        class="mt-4" />
    </div>
    <Separator text="Or sign in with" class="my-12" />
    <LoginButtonGoogle text="Google" />
    <LoginFooter title="Already have an account?" link="/auth/login" linkText="Sign in" />
  </div>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { type RegisterForm, RegisterStep } from '~/types/auth.d';

useHead({
  title: 'Sign up'
})

definePageMeta({
  layout: 'login' as MaybeRef
})

const data = reactive<RegisterForm>({
  email: '',
  password: '',
  step: RegisterStep.InputEmail
})

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email)
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: helpers.withMessage('Please enter minimum 6 symbols', minLength(6))
    }
  }
})

const v$ = useVuelidate(rules, data)

const btnContinue = computed(() => {
  return {
    disabled:
      data.step === RegisterStep.InputEmail && v$.value.email.$invalid ||
      data.step === RegisterStep.InputPassword && v$.value.password.$invalid,
    text: data.step === RegisterStep.InputEmail ? 'Continue' : 'Sign up'
  }
})

const back = (): void => {
  data.step = RegisterStep.InputEmail
}

const register = (): void => {
  if (data.step === RegisterStep.InputEmail && !v$.value.email.$invalid) {
    data.step = RegisterStep.InputPassword
    return
  }

  if (v$.value.password.$invalid) {
    return
  }

  // Register a user
  console.log('Sign up a user');
}
</script>