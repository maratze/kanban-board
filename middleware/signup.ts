import { AUTH_SIGNUP_PATH } from '~/constants'

export default defineNuxtRouteMiddleware(() => {
    if (!useSignupStore().email) {
        return navigateTo(AUTH_SIGNUP_PATH + '/step/email')
    }
})