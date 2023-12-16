<template>
  <FormCreate
    title="Create a workspace"
    description="Improve performance: team members will be able to get convenient access to all boards">
    <CustomInput
      type="text"
      id="name"
      label="Workspace name"
      text="Please enter the name of your team, company or organization"
      placeholder="Company «Worker»"
      class="mt-8"
      v-model="workspace.name"
      :v="v$.name"
      @submit="create" />
    <CustomTextArea
      type="text"
      id="description"
      label="Workspace description (optional)"
      text="Tell the colleagues a little bit about the workspace"
      placeholder="Description"
      class="mt-4"
      v-model="workspace.description"
      @submit="create" />
    <div class="flex gap-4 mt-8">
      <CustomButtonCancel />
      <CustomButton
        text="Continue"
        :disabled="v$.name.$invalid || isProcessing"
        @click.prevent="create" />
    </div>
  </FormCreate>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { addDoc, collection } from 'firebase/firestore';
import { WORKSPACES_PATH } from '~/constants';
import type { Workspace } from '~/types';

definePageMeta({
  middleware: ['auth']
})

const isProcessing = ref(false)
const workspace = ref({} as Workspace)
const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('The name field is required', required)
    }
  }
})

const v$ = useVuelidate(rules, workspace)

const create = async () => {
  isProcessing.value = true

  try {
    const { id } = await addDoc(collection(useFirestore(), 'workspaces'), workspace.value)
    navigateTo(WORKSPACES_PATH + '/' + id + '/boards')
  }
  catch (ex) {
    useNuxtApp().$toast.error('Something went wrong with creating a new workspace')
  }
  finally {
    isProcessing.value = false
  }
}
</script>