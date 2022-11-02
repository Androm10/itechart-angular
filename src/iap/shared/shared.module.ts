import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiModule } from './modules/api/api.module';
import { ConfigService } from './services/config.service';
import { DropdownComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent } from './components';
import { IsLoginUniqueValidator } from './validators/is-login-unique.validator';

@NgModule({
	declarations: [DropdownComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent],
	imports: [CommonModule, RouterModule, ApiModule],
	providers: [
		ConfigService,
		{
			provide: APP_INITIALIZER,
			useFactory: (config: ConfigService) => {
				return () => config.load();
			},
			deps: [ConfigService],
			multi: true,
		},
		IsLoginUniqueValidator,
	],
	exports: [CommonModule, DropdownComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent],
})
export class SharedModule {}
