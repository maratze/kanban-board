<template>
  <div>
    <span class="flex justify-between items-center">
      <span>{{ store.email }}</span>
      <span class="text-sm text-blue-600 border-blue-600 cursor-pointer hover:underline"
        @click.prevent="navigateTo('/auth/signup/step/email')">Back</span>
    </span>
    <CustomInput
      type="password"
      id="password"
      label="Password"
      placeholder="At least 6 characters"
      v-model="store.password"
      :v="v$.password"
      class="mt-4" />
    <CustomInput
      type="password"
      id="repeat-password"
      label="Repeat password"
      placeholder="Please enter value"
      v-model="store.repeatPassword"
      :v="v$.repeatPassword"
      class="mt-4" />
    <LoginButton
      text="Sign up"
      :loading="data.isSignupProcessing"
      :disabled="v$.password.$invalid || v$.repeatPassword.$invalid || data.isSignupProcessing"
      @click.prevent="register"
      class="mt-4" />
  </div>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { required, minLength, sameAs, helpers } from '@vuelidate/validators'

definePageMeta({
  layout: 'signup',
  middleware: ['auth']
})

const store = useSignupStore()
const data = reactive({
  isSignupProcessing: false
})

const rules = computed(() => {
  return {
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: helpers.withMessage('Please enter minimum 6 symbols', minLength(6))
    },
    repeatPassword: {
      required: helpers.withMessage('The password field is required', required),
      sameAs: helpers.withMessage('Repeat password is different', sameAs(store.password)),
    }
  }
})

const v$ = useVuelidate(rules, store)

const register = (): void => {
  if (v$.value.password.$invalid || v$.value.repeatPassword.$invalid) {
    return
  }

  try {
    data.isSignupProcessing = true

    const auth = getAuth()
    createUserWithEmailAndPassword(auth, store.email, store.password)
      .then((userCredential) => {
        const user = userCredential.user
        debugger
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          useNuxtApp().$toast.error('The email address is already in use by another account.');
        } else {
          useNuxtApp().$toast.error(error.message);
        }
      })
  }
  finally {
    data.isSignupProcessing = false
  }
}
</script>