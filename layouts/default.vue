<template>
  <div class="min-h-[100vh] bg-slate-100">
    <Header />
    <div>
      <Sidebar />
      <!-- Content -->
      <div class="p-4 pt-[74px] pl-[276px]">
        <slot />
      </div>
    </div>
  </div>
</template>