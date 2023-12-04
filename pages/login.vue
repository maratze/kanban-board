<template>
  <LoginHeader title="Welcome back">
    <Icon name="streamline:waving-hand" class="text-yellow-400" />
  </LoginHeader>
  <LoginHeaderDescription>Sign in to start managing your projects</LoginHeaderDescription>
  <div class="mt-8">
    <LoginEmail v-model="data.email" />
    <LoginPassword v-model="data.password" class="mt-4" />
    <div class="flex justify-end w-full mt-6">
      <NuxtLink to="#" class="text-sm text-blue-600 border-blue-600 hover:underline">Forgot password?</NuxtLink>
    </div>
    <LoginButton class="mt-6" />
  </div>
  <Separator text="Or sign in with" class="my-12" />
  <LoginButtonGoogle text="Google" />
  <LoginFooter title="Don't you have an account?" link="/signup" linkText="Sign up" />
</template>

<script lang="ts" setup>
import type { LoginForm } from '@/types/auth';

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
</script>