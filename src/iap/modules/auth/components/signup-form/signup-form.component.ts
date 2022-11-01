import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SignupForm } from '@shared/models/auth.models';
import { IsLoginUniqueValidator } from '@shared/validators/is-login-unique.validator';
import { matchPassword } from '@shared/validators/match-password.validator';

@Component({
	selector: 'iap-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
	@Output() submitEvent: EventEmitter<SignupForm> = new EventEmitter();

	signupForm!: FormGroup;

	constructor(private fb: FormBuilder, private isLoginUnique: IsLoginUniqueValidator) {}

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
				validators: matchPassword('password', 'passwordConfirmation'),
			},
		);
	}

	onSubmit() {
		if (this.signupForm.valid) {
			this.submitEvent.emit(this.signupForm.value);
		}
	}

	isControlInvalid(controlName: string) {
		const control = this.signupForm.controls?.[controlName];

		if (!control) {
			return null;
		}

		return control.invalid && (control.touched || control.dirty);
	}

	hasErrors(controlName: string, errorName: string) {
		const control = this.signupForm.controls?.[controlName];

		if (!control) {
			return null;
		}

		return !!control.errors?.[errorName];
	}
}
