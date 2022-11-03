import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { shopPages } from '@shared/constants/pages';
import { ApiResponse } from '@shared/models/auth.models';
import { JwtAuthService } from '@shared/services/jwt-auth.service';

@Component({
	selector: 'iap-signup-page',
	templateUrl: './signup-page.component.html',
	styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
	errorStatus: string = '';

	constructor(private jwtAuthService: JwtAuthService, private router: Router) {}

	ngOnInit(): void {
		if (this.jwtAuthService.isLoggedIn()) {
			this.router.navigateByUrl(shopPages.home.absolutePath);
		}
	}

	// TODO: add modal window component to notify user about success
	onSubmit(response: ApiResponse) {
		if (response.success) {
			window.alert(response.message);
			this.router.navigateByUrl(shopPages.home.absolutePath);
		}
		this.errorStatus = response.message;
	}
}
