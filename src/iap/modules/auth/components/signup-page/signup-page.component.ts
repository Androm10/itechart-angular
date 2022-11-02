import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { shopPages } from '@shared/constants/pages';
import { AUTH_SERVICE, USER_SERVICE } from '@shared/constants/tokens';
import { IAuthService } from '@shared/interfaces/auth-service.interface';
import { IUserService } from '@shared/interfaces/user-service.interface';
import { SignupForm } from '@shared/models/auth.models';

@Component({
	selector: 'iap-signup-page',
	templateUrl: './signup-page.component.html',
	styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
	errorStatus: string = '';

	constructor(
		@Inject(AUTH_SERVICE) private authService: IAuthService,
		@Inject(USER_SERVICE) private userService: IUserService,
		private router: Router,
	) {}

	ngOnInit(): void {
		if (this.authService.isLoggedIn()) {
			this.router.navigateByUrl(shopPages.home.absolutePath);
		}
	}

	// TODO: add modal window component to notify user about success
	onSubmit(form: SignupForm) {
		this.authService
			.signup(form.login, form.password, form.username, form.passwordConfirmation)
			.pipe(
				tap(() => {
					return this.authService.login(form.login, form.password).subscribe(() => {
						return this.userService.updateProfile({ ...form }).subscribe();
					});
				}),
			)
			.subscribe({
				next: () => {
					window.alert('You have been successfully registered!');
					this.errorStatus = '';
					this.router.navigateByUrl(shopPages.home.absolutePath);
				},
				error: (err) => {
					this.errorStatus = err?.message || 'unknown error!';
				},
			});
	}
}
