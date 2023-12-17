<template>
  <WorkspaceBlock :workspace="(workspace as Workspace)" />
  <FormCreate
    title="Create a board"
    description="The board is a collection of cards. Use it to manage a project, track or organize anything."
    class="mt-4">
    <CustomInput
      type="text"
      id="title"
      label="Board title"
      text="Please enter the name of your board"
      placeholder="Worker board"
      class="mt-8"
      v-model="board.name"
      :v="v$.name"
      @submit="create" />
    <div class="flex gap-4 mt-8">
      <CustomButtonCancel />
      <CustomButton
        text="Create"
        :disabled="v$.name.$invalid || isProcessing"
        @click.prevent="create" />
    </div>
  </FormCreate>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { addDoc, collection, doc } from 'firebase/firestore';
import { WORKSPACES_PATH } from '~/constants';
import type { Board, Workspace } from '~/types';

definePageMeta({
  middleware: ['auth']
})

const isProcessing = ref(false)
const workspace = useDocument(doc(collection(useFirestore(), 'workspaces'), useRoute().params.id as string))

const board = ref({} as Board)
const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('The title field is required', required)
    }
  }
})

const v$ = useVuelidate(rules, board)

const create = async () => {
  isProcessing.value = true

  try {
    board.value.workspaceId = useRoute().params.id as string
    await addDoc(collection(useFirestore(), 'boards'), board.value)
    navigateTo(WORKSPACES_PATH + '/' + board.value.workspaceId + '/boards')
  }
  catch (ex) {
    useNuxtApp().$toast.error('Something went wrong with creating a new board')
  }
  finally {
    isProcessing.value = false
  }
}
</script>