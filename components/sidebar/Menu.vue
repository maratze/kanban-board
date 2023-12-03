<template>
  <div>
    <p class="text-sm text-slate-500">Menu</p>
    <ul class="grid gap-1 mt-4">
      <li>
        <NuxtLink to="/boards" activeClass="text-slate-600 bg-slate-100 pointer-events-none" class="flex justify-start items-center gap-2 py-3 px-3 text-slate-600 rounded-md transition-all hover:bg-slate-100">
          <Icon name="streamline:dashboard-3" class="text-md" />
          <span class="text-sm font-medium">Boards</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" activeClass="text-slate-600 bg-slate-100 pointer-events-none" class="flex justify-start items-center gap-2 py-3 px-3 text-slate-600 rounded-md transition-all hover:bg-slate-100">
          <Icon name="streamline:interface-home-3-home-house-map-roof" class="text-md" />
          <span class="text-sm font-medium">Home page</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>