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
		'/auth': { redirect: '/auth/login' },
		'/auth/signup': { redirect: '/auth/signup/step/email' },
		'/auth/signup/step': { redirect: '/auth/signup/step/email' },
		'/login': { redirect: '/auth/login' },
		'/signup': { redirect: '/auth/signup/step/email' },
	}
})
