<template>
  <div>
    <LoginHeader title="Sign up"></LoginHeader>
    <LoginHeaderDescription>Sign up to create your first project</LoginHeaderDescription>
    <div class="mt-8">
      <LoginEmail />
      <LoginButton text="Sign up" class="mt-4" />
    </div>
    <Separator text="Or sign in with" class="my-12" />
    <LoginButtonGoogle text="Google" />
    <LoginFooter title="Already have an account?" link="/login" linkText="Sign in" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Sign up'
})
definePageMeta({
  layout: 'login' as MaybeRef
})
</script>