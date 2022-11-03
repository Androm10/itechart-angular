import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiModule } from './modules/api/api.module';
import { IsControlInvalidPipe } from './pipes/is-control-invalid.pipe';
import { IsControlHasErrorsPipe } from './pipes/is-control-has-errors.pipe';
import { DropdownComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent } from './components';
import { IsLoginUniqueValidator } from './validators/is-login-unique.validator';
import { ApiService } from './services/api.service';
import { EnvironmentService } from './services/environment.service';
import { JwtAuthService } from './services/jwt-auth.service';

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
