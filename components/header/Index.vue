<template>
  <div>
    <div class="fixed z-20 h-[56px] w-full grid items-center px-4 bg-white border-b border-slate-300">
      <div class="flex justify-between">
        <div>
          <HeaderLogo />
        </div>
        <div class="flex gap-4">
          <HeaderAccount @click.prevent="signOut" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAuth } from 'firebase/auth';

const signOut = () => {
  getAuth().signOut()
  navigateTo('/', { external: true })
}
</script>