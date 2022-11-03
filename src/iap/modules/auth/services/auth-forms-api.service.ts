import { Injectable } from '@angular/core';

import { LoginForm, SignupForm } from '@shared/models/auth.models';
import { UserService } from '@shared/modules/api/services/user.service';
import { JwtAuthService } from '@shared/services/jwt-auth.service';
import { switchMap } from 'rxjs';

@Injectable()
export class AuthFormsApiService {
	constructor(private jwtAuthService: JwtAuthService, private userService: UserService) {}

	signup(form: SignupForm) {
		return this.jwtAuthService.signup(form.login, form.password, form.username, form.passwordConfirmation).pipe(
			switchMap(() => this.jwtAuthService.login(form.login, form.password)),
			switchMap(() => this.userService.updateProfile({ ...form })),
		);
	}

	login(form: LoginForm) {
		return this.jwtAuthService.login(form.login, form.password);
	}
}
