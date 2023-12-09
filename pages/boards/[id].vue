<template>
  <div>
    <!-- Header height is 3.5rem -->
    <div class="grid items-center h-[4rem] px-4 bg-white border-b border-slate-300">
      <div class="flex justify-between">
        <div class="flex items-center gap-4">
          <span>Project name</span>
          <Icon name="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars"
            class="transition-all cursor-pointer hover:scale-110" />
          <!-- <Icon name="streamline:star-1-solid" class="transition-all cursor-pointer hover:scale-110" /> -->
        </div>
        <div class="flex gap-4">
          <button
            class="flex justify-center items-center gap-2 py-2 px-4 text-slate-500 rounded-md bg-slate-200 transition-all duration-300 hover:bg-slate-300">
            <Icon name="streamline:interface-user-add-actions-add-close-geometric-human-person-plus-single-up-user" />
            <span>Share</span>
          </button>
          <div
            class="flex justify-center items-center w-10 h-10 text-red-400 rounded-full bg-red-200 transition-all cursor-pointer hover:ring-4 hover:ring-slate-300">
            M</div>
        </div>
      </div>
    </div>
    <div class="p-4 h-[calc(100vh-4rem)] bg-slate-300 overflow-scroll">
      <div class="flex gap-4 w-max items-start">
        <!-- Column -->
        <div class="w-[320px] min-w-[320px] pt-4 pb-2 px-2 bg-slate-100 rounded-lg ring-1 ring-slate-300">
          <!-- Title -->
          <div class="flex items-center max-w-max h-7 mb-4 px-3 text-slate-500 text-md font-medium rounded-full">To do
          </div>
          <!-- Card -->
          <div
            class="mt-2 p-4 rounded-lg bg-white shadow-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400">
            <h3 class="block text-md font-medium">Simple card title</h3>
          </div>
          <!-- Card -->
          <div
            class="mt-2 p-4 rounded-lg bg-white shadow-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400">
            <div class="flex gap-2 mb-4">
              <div class="flex justify-center items-center w-6 h-6 text-orange-400 text-xs rounded-full bg-orange-200">M
              </div>
              <div class="flex justify-center items-center w-6 h-6 text-red-400 text-xs rounded-full bg-red-200">R
              </div>
            </div>
            <h3 class="block text-md font-medium">Card with authors</h3>
          </div>
          <!-- Card -->
          <div
            class="mt-2 p-4 rounded-lg bg-white shadow-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400">
            <h3 class="block text-md font-medium">Card title with authors and labels</h3>
            <p class="block mt-2 text-sm text-slate-500">A short description of a card.</p>
            <div class="flex items-center gap-4 mt-4 text-sm text-slate-500">
              <Icon name="streamline:visible" />
              <Icon
                name="streamline:interface-text-formatting-paragraph-article-alignment-formatting-normal-paragraph-text" />
              <span class="flex items-center gap-1">
                <Icon
                  name="streamline:interface-validation-check-square-1-check-form-validation-checkmark-success-add-addition-box-square" />
                <span class="text-xs">0/2</span>
              </span>
              <span class="flex items-center gap-1">
                <Icon name="streamline:chat-bubble-oval" />
                <span class="text-xs">2</span>
              </span>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <div class="text-xs px-2 py-1 rounded-md bg-green-200">Label</div>
              <div class="text-xs px-2 py-1 rounded-md bg-blue-200">Label</div>
              <div class="text-xs px-2 py-1 rounded-md bg-purple-200">Label</div>
              <div class="text-xs px-2 py-1 rounded-md bg-red-200">Label</div>
              <div class="text-xs px-2 py-1 rounded-md bg-orange-200">Label</div>
              <div class="text-xs px-2 py-1 rounded-md bg-yellow-200">Label</div>
            </div>
          </div>
          <!-- Button add a card -->
          <div class="mt-2">
            <button
              class="flex justify-start items-center gap-2 w-full py-2 px-4 text-slate-500 text-sm rounded-lg transition-all hover:bg-slate-200">
              <Icon name="streamline:add-1-solid" />
              <span class="font-medium">Add a card</span>
            </button>
          </div>
        </div>
        <!-- Column -->
        <div class="w-[320px] min-w-[320px] pt-4 pb-2 px-2 bg-slate-100 rounded-lg ring-1 ring-slate-300">
          <!-- Title -->
          <div class="flex items-center max-w-max h-7 mb-4 px-3 text-slate-500 text-md font-medium rounded-full">In
            progress
          </div>
          <!-- Button add a card -->
          <div class="mt-2">
            <button
              class="flex justify-start items-center gap-2 w-full py-2 px-4 text-slate-500 text-sm rounded-lg transition-all hover:bg-slate-200">
              <Icon name="streamline:add-1-solid" />
              <span class="font-medium">Add a card</span>
            </button>
          </div>
        </div>
        <!-- Column -->
        <div class="w-[320px] min-w-[320px] p-2 px-2 bg-slate-200 rounded-lg ring-1 ring-slate-300">
          <!-- Button add a card -->
          <div>
            <button
              class="flex justify-start items-center gap-2 w-full py-2 px-4 text-slate-500 text-sm rounded-lg transition-all hover:bg-slate-300">
              <Icon name="streamline:add-1-solid" />
              <span class="font-medium">Add a new column</span>
            </button>
          </div>
        </div>
      </div>
      <!-- <slot /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
</script>