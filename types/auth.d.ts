interface LoginForm {
	email: string;
	password: string;
}

interface RegisterForm {
	email: string;
	password: string;
	repeatPassword: string;
}

export { LoginForm, RegisterForm };
