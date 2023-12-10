<template>
  <AuthWrapper>
    <LoginHeader title="Sign up"></LoginHeader>
    <LoginHeaderDescription>Sign up to create your first project</LoginHeaderDescription>
    <div class="mt-8">
      <slot />
    </div>
    <Separator text="Or sign in with" class="my-12" />
    <LoginButtonGoogle text="Google" />
    <LoginFooter
      title="Already have an account?"
      linkText="Sign in"
      :link="AUTH_LOGIN_PATH" />
  </AuthWrapper>
</template>

<script lang="ts" setup>
import { AUTH_LOGIN_PATH } from '~/constants';

useHead({
  title: 'Sign up'
})
</script>