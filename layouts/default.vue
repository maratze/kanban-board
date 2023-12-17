<template>
  <div class="min-h-[100vh] bg-slate-100">
    <div class="max-w-[1440px] m-auto">
      <div>
        <div class="p-4">
          <Header class="mb-4" />
          <div class="flex">
            <Sidebar />
            <div class="pl-4 w-full">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const wsStore = useWorkspacesStore()
wsStore.load()
</script>