export interface LoginForm {
	email: string
	password: string
}

export interface RegisterForm {
	email: string
	password: string
	step: RegisterStep
}

export enum RegisterStep {
	InputEmail = 1,
	InputPassword = 2
}