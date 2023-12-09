import { getAuth } from 'firebase/auth'

export default defineNuxtRouteMiddleware((to, from) => {
    getAuth().onAuthStateChanged((user) => {
        if (user) {
            // Do something...
            // If the user has roles we need to check it also
        } else {
            navigateTo('/auth/login')
        }
    });
})