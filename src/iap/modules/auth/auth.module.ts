import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthFormsApiService } from './services/auth-forms-api.service';

// TODO: Add other strategies (and ngxs)
@NgModule({
	declarations: [SignupFormComponent, LoginFormComponent, SignupPageComponent, LoginPageComponent],
	imports: [ReactiveFormsModule, SharedModule],
	providers: [AuthFormsApiService],
	exports: [SignupFormComponent, SignupPageComponent, LoginPageComponent],
})
export class AuthModule {}
