import { environment } from 'src/environments/environment';

const api = environment.apiUrl;

export const apiRoutesAuth = {
	login: `${api}auth/login`,
	loginAdimn: `${api}auth/login-admin`,
	signup: `${api}auth/signup`,
};

export const apiRoutesUser = {
	get: `${api}user/`,
	getByLogin: `${api}user/get-by-login`,
	updateProfile: `${api}userinfo/update-profile`,
};
