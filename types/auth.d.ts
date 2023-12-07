export interface LoginForm {
	email: string
	password: string
	isProcessing: boolean
}

export interface RegisterForm {
	email: string
	password: string
	repeatPassword: string
	isProcessing: boolean
}