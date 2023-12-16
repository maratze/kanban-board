<template>
  <CustomButton
    text="Cancel"
    :isCustomColor="true"
    class="text-white border border-red-400 bg-red-400 hover:bg-red-300"
    @click.prevent="useRouter().go(-1)" />
</template>