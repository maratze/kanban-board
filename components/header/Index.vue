<template>
  <div>
    <div
      class="relative z-20 h-[64px] w-full grid items-center px-4 bg-white border border-slate-300 rounded-lg">
      <div class="flex justify-between">
        <div>
          <Logo />
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