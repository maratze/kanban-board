<template>
  <div>
    <Space
      image-path="/image-1.svg"
      description="The workspace allows you to organize teamwork, create boards and structure your projects.">
      <CustomButton text="Create a new workspace" class="mt-8 w-full max-w-xs m-auto" @click.prevent="goToCreate()" />
    </Space>
  </div>
</template>

<script lang="ts" setup>
import { WORKSPACES_PATH } from '~/constants';

const goToCreate = () => {
  navigateTo(WORKSPACES_PATH + '/create')
}
</script>