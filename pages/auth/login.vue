<template>
  <LoginHeader title="Welcome back">
    <Icon name="streamline:waving-hand" class="text-yellow-400" />
  </LoginHeader>
  <LoginHeaderDescription>Sign in to start managing your projects</LoginHeaderDescription>
  <div class="mt-8">
    <CustomInput
      type="text"
      id="email"
      label="Email"
      placeholder="example@mail.com"
      v-model="data.email"
      :v="v$.email" />
    <CustomInput
      type="password"
      id="password"
      label="Password"
      placeholder="At least 6 characters"
      v-model="data.password"
      class="mt-4"
      :v="v$.password" />
    <div class="flex justify-end w-full mt-6">
      <NuxtLink to="/auth/restore" class="text-sm text-blue-600 border-blue-600 hover:underline">Forgot password?
      </NuxtLink>
    </div>
    <LoginButton
      class="mt-6"
      :disabled="isDisabledBtnLogin"
      @click.prevent="login" />
  </div>
  <Separator text="Or sign in with" class="my-12" />
  <LoginButtonGoogle text="Google" />
  <LoginFooter title="Don't you have an account?" link="/auth/signup" linkText="Sign up" />
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core';
import type { LoginForm } from '@/types/auth';
import { required, email, minLength, helpers } from '@vuelidate/validators';

useHead({
  title: 'Sign in'
})

definePageMeta({
  layout: 'login' as MaybeRef
})

const data = reactive<LoginForm>({
  email: '',
  password: ''
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

const isDisabledBtnLogin = computed(() => {
  return v$.value.email.$invalid || v$.value.password.$invalid
})

const login = (): void => {
  // Login a user
  console.log('Login a user');
}
</script>