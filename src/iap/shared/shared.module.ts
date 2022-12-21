import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarouselComponent, DropdownComponent, GameCardComponent, PreviewSlideComponent } from './components';
import { ApiModule } from './modules/api/api.module';
import { IsControlHasErrorsPipe } from './pipes/is-control-has-errors.pipe';
import { IsControlInvalidPipe } from './pipes/is-control-invalid.pipe';
import { ApiService } from './services/api.service';
import { EnvironmentService } from './services/environment.service';
import { JwtAuthService } from './services/jwt-auth.service';
import { IsLoginUniqueValidator } from './validators/is-login-unique.validator';

@NgModule({
	declarations: [
		DropdownComponent,
		CarouselComponent,
		GameCardComponent,
		PreviewSlideComponent,
		IsControlInvalidPipe,
		IsControlHasErrorsPipe,
	],
	imports: [CommonModule, RouterModule, ApiModule],
	providers: [ApiService, EnvironmentService, JwtAuthService, IsLoginUniqueValidator],
	exports: [
		CommonModule,
		DropdownComponent,
		CarouselComponent,
		GameCardComponent,
		PreviewSlideComponent,
		IsControlInvalidPipe,
		IsControlHasErrorsPipe,
	],
})
export class SharedModule {}
