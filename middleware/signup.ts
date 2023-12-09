export default defineNuxtRouteMiddleware((to, from) => {
    const signupStore = useSignupStore()

    if (!signupStore.email) {
        return navigateTo('/auth/signup/step/email')
    }
})