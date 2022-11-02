import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import { AUTH_SERVICE } from '@shared/constants/tokens';
import { JwtAuthService } from './services/jwt-auth.service';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

// TODO: Add other strategies (and ngxs)
@NgModule({
	declarations: [SignupFormComponent, LoginFormComponent, SignupPageComponent, LoginPageComponent],
	imports: [ReactiveFormsModule, SharedModule],
	providers: [
		{
			provide: AUTH_SERVICE,
			useClass: JwtAuthService,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpTokenInterceptor,
			multi: true,
		},
	],
	exports: [SignupFormComponent, SignupPageComponent, LoginPageComponent],
})
export class AuthModule {}
