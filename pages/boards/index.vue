<template>
  <div class="grid gap-8">
    <div>
      <!-- Title -->
      <h2 class="flex items-center gap-2 text-md font-medium text-slate-600">
        <Icon name="streamline:fastforward-clock" />
        <span>Recently</span>
      </h2>
      <!-- Boards -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
        <!-- Board -->
        <div
          class="flex flex-wrap min-h-[100px] w-full p-2 bg-zinc-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-zinc-400">
          <h3 class="block w-full text-white font-medium break-words leading-4">Worker</h3>
          <p class="flex justify-between items-end w-full">
            <span class="text-white text-xs leading-3">Workspace name</span>
          </p>
        </div>
        <!-- Board -->
        <div
          class="flex flex-wrap min-h-[100px] w-full p-2 bg-slate-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-slate-400">
          <h3 class="block w-full text-white font-medium break-words leading-4">Vuex</h3>
          <p class="flex justify-between items-end w-full">
            <span class="text-white text-xs leading-3">Different workspace</span>
          </p>
        </div>
      </div>
    </div>
    <div>
      <!-- Title -->
      <h2 class="flex items-center gap-2 text-md font-medium text-slate-600">
        <Icon name="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" />
        <span>Favorites</span>
      </h2>
      <!-- Boards -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
        <!-- Board -->
        <div
          class="flex flex-wrap min-h-[100px] w-full p-2 bg-red-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-red-400">
          <h3 class="block w-full text-white font-medium break-words leading-4">Worker</h3>
          <p class="flex justify-between items-end w-full">
            <span class="text-white text-xs leading-3">Workspace name 1</span>
            <Icon name="streamline:star-1-solid" class="transition-all cursor-pointer text-yellow-400 hover:scale-110" />
          </p>
        </div>
        <!-- Board -->
        <div
          class="flex flex-wrap min-h-[100px] w-full p-2 bg-orange-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-orange-400">
          <h3 class="block w-full text-white font-medium break-words leading-4">Vuex</h3>
          <p class="flex justify-between items-end w-full">
            <span class="text-white text-xs leading-3">Workspace name</span>
            <Icon name="streamline:star-1-solid" class="transition-all cursor-pointer text-yellow-400 hover:scale-110" />
          </p>
        </div>
        <!-- Board -->
        <div
          class="flex flex-wrap min-h-[100px] w-full p-2 bg-blue-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-blue-400">
          <h3 class="block w-full text-white font-medium break-words leading-4">Vue</h3>
          <p class="flex justify-between items-end w-full">
            <span class="text-white text-xs leading-3">Workspace name</span>
            <Icon name="streamline:star-1-solid" class="transition-all cursor-pointer text-yellow-400 hover:scale-110" />
          </p>
        </div>
        <!-- Board -->
        <div
          class="flex flex-wrap min-h-[100px] w-full p-2 bg-purple-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-purple-400">
          <h3 class="block w-full text-white font-medium break-words leading-4">Vue-router</h3>
          <p class="flex justify-between items-end w-full">
            <span class="text-white text-xs leading-3">Workspace name</span>
            <Icon name="streamline:star-1-solid" class="transition-all cursor-pointer text-yellow-400 hover:scale-110" />
          </p>
        </div>
        <!-- Board -->
        <div
          class="flex flex-wrap min-h-[100px] w-full p-2 bg-green-400 rounded-md cursor-pointer transition-all duration-100 hover:ring-4 hover:ring-green-400">
          <h3 class="block w-full text-white font-medium break-words leading-4">Vue-router</h3>
          <p class="flex justify-between items-end w-full">
            <span class="text-white text-xs leading-3">Workspace name</span>
            <Icon name="streamline:star-1-solid" class="transition-all cursor-pointer text-yellow-400 hover:scale-110" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>