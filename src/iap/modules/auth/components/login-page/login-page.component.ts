import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { shopPages } from '@shared/constants/pages';
import { ApiResponse } from '@shared/models/auth.models';
import { JwtAuthService } from '@shared/services/jwt-auth.service';

@Component({
	selector: 'iap-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
	errorStatus: string = '';

	constructor(private authService: JwtAuthService, private router: Router) {}

	ngOnInit(): void {
		if (this.authService.isLoggedIn()) {
			this.router.navigateByUrl(shopPages.home.absolutePath);
		}
	}

	// TODO: add modal window component to notify user about success
	onSubmit(response: ApiResponse): void {
		if (response.success) {
			window.alert(response.message);
			this.router.navigateByUrl(shopPages.home.absolutePath);
		}
		this.errorStatus = response.message;
	}
}
