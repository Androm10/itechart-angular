import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiResponse } from '@shared/models/auth.models';
import { IapError } from '@shared/models/types/iap-error.type';
import { AuthFormsApiService } from '../../services/auth-forms-api.service';

@Component({
	selector: 'iap-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
	@Output() submitEvent: EventEmitter<ApiResponse> = new EventEmitter();

	loginForm!: FormGroup;

	constructor(private fb: FormBuilder, private authFormsApiService: AuthFormsApiService) {}

	ngOnInit() {
		this.loginForm = this.fb.group({
			login: [''],
			password: [''],
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			this.authFormsApiService.login(this.loginForm.value).subscribe({
				next: this.onSubmitSuccess,
				error: this.onSubmitError,
			});
		}
	}

	private onSubmitError(error: IapError) {
		this.submitEvent.emit({
			success: true,
			message: error?.message,
		});
	}

	private onSubmitSuccess() {
		this.submitEvent.emit({
			success: true,
			message: 'Successfully registered',
		});
	}
}
