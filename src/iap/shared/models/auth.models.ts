export interface SignupForm {
	login: string;
	username: string;
	birthDate?: string;
	description?: string;
	password: string;
	passwordConfirmation: string;
}

export interface LoginForm {
	login: string;
	password: string;
}
