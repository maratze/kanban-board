import * as constants from './constants';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: true },
	modules: [
		'nuxt-icon',
		'nuxt-vuefire',
		'@pinia/nuxt'
	],
	imports: {
		dirs: [
			'types/*.ts',
			'types/**/*.ts'
		]
	},
	app: {
		head: {
			title: 'Worker'
		}
	},
	css: [
		'@/assets/scss/main.scss'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	pinia: {
		storesDirs: ['./stores/**'],
	},
	vuefire: {
		auth: {
			enabled: true
		},
		config: {
			apiKey: "AIzaSyBU4APwaxZxR_VWOYh1he2etCT4ZxfqBqc",
			authDomain: "worker-4e0a6.firebaseapp.com",
			projectId: "worker-4e0a6",
			storageBucket: "worker-4e0a6.appspot.com",
			messagingSenderId: "865760414147",
			appId: "1:865760414147:web:8d710d411da4390cd11576",
			measurementId: "G-W94TE1GQX7"
		}
	},
	routeRules: {
		'/': { redirect: constants.WORKSPACES_PATH },
		'/auth': { redirect: constants.AUTH_LOGIN_PATH },
		'/login': { redirect: constants.AUTH_LOGIN_PATH },
		'/signup': { redirect: constants.AUTH_SIGNUP_PATH + '/step/email' },
		'/auth/signup': { redirect: constants.AUTH_SIGNUP_PATH + '/step/email' },
		'/auth/signup/step': { redirect: constants.AUTH_SIGNUP_PATH + '/step/email' },
	}
})
