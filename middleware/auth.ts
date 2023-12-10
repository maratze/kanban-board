import { AUTH_LOGIN_PATH } from '~/constants';

export default defineNuxtRouteMiddleware(async () => {
    if (await useIsLoggedIn().value) {
        // Do something
    } else {
        return navigateTo(AUTH_LOGIN_PATH)
    }
})