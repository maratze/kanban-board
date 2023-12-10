export default defineNuxtRouteMiddleware(async () => {
    if (await useIsLoggedIn().value) {
        return navigateTo('/')
    }
})
