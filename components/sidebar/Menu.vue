<template>
  <div>
    <ul class="grid gap-2">
      <li>
        <NuxtLink to="/boards" activeClass="text-slate-600 bg-slate-100 pointer-events-none" class="flex justify-start items-center gap-2 py-3 px-4 text-slate-600 rounded-md transition-all hover:bg-slate-100">
          <Icon name="streamline:dashboard-3" class="text-sm" />
          <span class="text-sm font-medium">Boards</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" activeClass="text-slate-600 bg-slate-100 pointer-events-none" class="flex justify-start items-center gap-2 py-3 px-4 text-slate-600 rounded-md transition-all hover:bg-slate-100">
          <Icon name="streamline:interface-home-3-home-house-map-roof" class="text-sm" />
          <span class="text-sm font-medium">Home page</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>