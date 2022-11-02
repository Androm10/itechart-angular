import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginForm } from '@shared/models/auth.models';

@Component({
	selector: 'iap-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
	@Output() submitEvent: EventEmitter<LoginForm> = new EventEmitter();

	loginForm!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.loginForm = this.fb.group({
			login: [''],
			password: [''],
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			this.submitEvent.emit(this.loginForm.value);
		}
	}
}
