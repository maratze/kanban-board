<template>
  <div>
    <div class="grid gap-1">
      <!-- Workspace -->
      <div>
        <div
          class="flex justify-between items-center gap-2 p-2 text-slate-600 rounded-md transition-all cursor-pointer hover:bg-slate-100">
          <div class="flex items-center gap-2">
            <div
              class="flex justify-center items-center min-w-[24px] min-h-[24px] text-xs text-white rounded-md bg-red-400">
              W</div>
            <span class="text-sm font-medium leading-4">Workspace name</span>
          </div>
          <div class="relative">
            <span class="relative block w-2 h-[2px] -left-[5px] top-[2px] -rotate-45 rounded-full bg-slate-500"></span>
            <span class="relative block w-2 h-[2px] rotate-45 rounded-full bg-slate-500"></span>
          </div>
        </div>
        <div>
          <ul class="grid mt-2">
            <li>
              <NuxtLink to="/#" activeClass="text-slate-600 bg-slate-100 pointer-events-none"
                class="flex justify-start items-center gap-2 py-2 px-3 pl-8 text-slate-600 rounded-md transition-all hover:bg-slate-100">
                <Icon name="streamline:dashboard-3" class="text-sm" />
                <span class="text-xs">Boards</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#" activeClass="text-slate-600 bg-slate-100 pointer-events-none"
                class="flex justify-start items-center gap-2 py-2 px-3 pl-8 text-slate-600 rounded-md transition-all hover:bg-slate-100">
                <Icon name="streamline:interface-user-multiple-close-geometric-human-multiple-person-up-user"
                  class="text-sm" />
                <span class="text-xs">Users</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#" activeClass="text-slate-600 bg-slate-100 pointer-events-none"
                class="flex justify-start items-center gap-2 py-2 px-3 pl-8 text-slate-600 rounded-md transition-all hover:bg-slate-100">
                <Icon name="streamline:cog" class="text-sm" />
                <span class="text-xs">Settings</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div><!-- end: Workspace -->
      <!-- Workspace -->
      <div>
        <div
          class="flex justify-between items-center gap-2 p-2 text-slate-600 rounded-md transition-all cursor-pointer hover:bg-slate-100">
          <div class="flex items-center gap-2">
            <div
              class="flex justify-center items-center min-w-[24px] min-h-[24px] text-xs text-white rounded-md bg-yellow-400">
              W</div>
            <span class="text-sm font-medium leading-4">Workspace name 1</span>
          </div>
          <div class="relative">
            <span class="relative block w-2 h-[2px] -left-[5px] top-[2px] rotate-45 rounded-full bg-slate-500"></span>
            <span class="relative block w-2 h-[2px] -rotate-45 rounded-full bg-slate-500"></span>
          </div>
        </div>
      </div><!-- end: Workspace -->
      <!-- Workspace -->
      <div>
        <div
          class="flex justify-between items-center gap-2 p-2 text-slate-600 rounded-md transition-all cursor-pointer hover:bg-slate-100">
          <div class="flex items-center gap-2">
            <div
              class="flex justify-center items-center min-w-[24px] min-h-[24px] text-xs text-white rounded-md bg-purple-400">
              W</div>
            <span class="text-sm font-medium leading-4">Project name</span>
          </div>
          <div class="relative">
            <span class="relative block w-2 h-[2px] -left-[5px] top-[2px] rotate-45 rounded-full bg-slate-500"></span>
            <span class="relative block w-2 h-[2px] -rotate-45 rounded-full bg-slate-500"></span>
          </div>
        </div>
      </div><!-- end: Workspace -->
    </div>
  </div>
</template>