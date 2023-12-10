<template>
  <AuthWrapper>
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
        v-model="store.email"
        :v="v$.email"
        @submit="login" />
      <CustomInput
        type="password"
        id="password"
        label="Password"
        placeholder="At least 6 characters"
        v-model="store.password"
        class="mt-4"
        :v="v$.password"
        @submit="login" />
      <div class="flex justify-end w-full mt-6">
        <NuxtLink to="/auth/restore" class="text-sm text-blue-600 border-blue-600 hover:underline">Forgot password?
        </NuxtLink>
      </div>
      <LoginButton
        class="mt-6"
        :disabled="v$.email.$invalid || v$.password.$invalid || store.isProcessing"
        :loading="store.isProcessing"
        @click.prevent="login" />
    </div>
    <Separator text="Or sign in with" class="my-12" />
    <LoginButtonGoogle text="Google" />
    <LoginFooter
      title="Don't you have an account?"
      linkText="Sign up"
      :link="AUTH_SIGNUP_PATH" />
  </AuthWrapper>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { AUTH_SIGNUP_PATH, BOARDS_PATH } from '~/constants';

useHead({
  title: 'Sign in'
})

definePageMeta({
  layout: 'empty',
  middleware: ['sign']
})

const store = useLoginStore()

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

const v$ = useVuelidate(rules, store)

const login = (): void => {
  if (v$.value.email.$invalid || v$.value.password.$invalid) {
    return
  }

  store.login()

}
</script>