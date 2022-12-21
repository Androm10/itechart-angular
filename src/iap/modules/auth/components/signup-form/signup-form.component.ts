import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiResponse } from '@shared/models/auth.models';
import { IapError } from '@shared/models/types/iap-error.type';
import { IapSyncValidators } from '@shared/validators/iap-sync-validators.validator';
import { IsLoginUniqueValidator } from '@shared/validators/is-login-unique.validator';
import { AuthFormsApiService } from '../../services/auth-forms-api.service';

@Component({
	selector: 'iap-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
	@Output() submitEvent: EventEmitter<ApiResponse> = new EventEmitter();

	signupForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private isLoginUnique: IsLoginUniqueValidator,
		private authFormsApiService: AuthFormsApiService,
	) {}

	ngOnInit() {
		this.signupForm = this.fb.group(
			{
				login: ['', [Validators.required, Validators.email], [this.isLoginUnique]],
				username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
				birthDate: [''],
				description: [''],
				password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
				passwordConfirmation: ['', [Validators.required]],
			},
			{
				validators: IapSyncValidators.matchControls('password', 'passwordConfirmation'),
			},
		);
	}

	onSubmit() {
		this.authFormsApiService.signup(this.signupForm.value).subscribe({
			next: () => this.onSubmitSuccess(),
			error: (e: IapError) => this.onSubmitError(e),
		});
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
