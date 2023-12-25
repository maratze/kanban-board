<template>
  <div
    class="flex flex-wrap min-h-[100px] w-full p-4 bg-zinc-400 rounded-md cursor-pointer transition-all duration-100 hover:scale-105"
    :style="`background-color: ${board?.color}`"
    @click.prevent="update">
    <h3 class="block w-full font-medium break-words leading-4">{{ board?.name }}</h3>
    <p class="flex justify-between items-end w-full">
      <span class="text-white text-xs leading-3">{{ workspaceName }}</span>
      <Icon
        :name="iconName"
        class="transition-all cursor-pointer text-yellow-400 hover:scale-110"
        @click.prevent="makeFavorite"
        @mouseover="mouseOverStar = true"
        @mouseleave="mouseOverStar = false" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Board } from '~/types'

const props = defineProps({
  workspaceName: { type: String, required: false },
  board: Object as PropType<Board>
})

const { user } = storeToRefs(useUserStore())
const { favoriteBoard, updateLastVisited } = useBoardStore()
const mouseOverStar = ref(false)

const iconName = computed(() => {
  return props.board?.favoriteUserIds?.includes(user.value.uid) ? 'streamline:star-1-solid' : 'streamline:star-1'
})

const makeFavorite = () => {
  if (!props.board) {
    return
  }


  const favoriteUserIds = props.board?.favoriteUserIds ?? []

  if (favoriteUserIds.length) {
    const indexOf = favoriteUserIds.indexOf(user.value.uid)

    if (indexOf > -1) {
      favoriteUserIds.splice(indexOf, 1)
    } else {
      favoriteUserIds.push(user.value.uid)
    }
  } else {
    favoriteUserIds.push(user.value.uid)
  }

  props.board.favoriteUserIds = favoriteUserIds
  favoriteBoard(props.board)
}

const update = () => {
  if (!props.board || mouseOverStar.value) {
    return
  }

  props.board.lastVisited = new Date()
  updateLastVisited(props.board)
}
</script>