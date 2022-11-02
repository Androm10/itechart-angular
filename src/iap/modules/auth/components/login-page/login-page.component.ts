import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { shopPages } from '@shared/constants/pages';
import { AUTH_SERVICE } from '@shared/constants/tokens';
import { IAuthService } from '@shared/interfaces/auth-service.interface';
import { LoginForm } from '@shared/models/auth.models';

@Component({
	selector: 'iap-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
	errorStatus: string = '';

	constructor(@Inject(AUTH_SERVICE) private authService: IAuthService, private router: Router) {}

	ngOnInit(): void {
		if (this.authService.isLoggedIn()) {
			this.router.navigateByUrl(shopPages.home.absolutePath);
		}
	}

	// TODO: add modal window component to notify user about success
	onSubmit(form: LoginForm) {
		this.authService.login(form.login, form.password).subscribe({
			next: () => {
				this.errorStatus = '';
				this.router.navigateByUrl(shopPages.home.absolutePath);
			},
			error: (err) => {
				console.log(err);
				this.errorStatus = err?.message || 'unknown error!';
			},
		});
	}
}
