import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DropdownComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent } from './components';
import { SlideDirective } from './directives/slide.directive';

@NgModule({
	declarations: [DropdownComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent, SlideDirective],
	imports: [CommonModule, RouterModule],
	exports: [DropdownComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent, SlideDirective],
})
export class SharedModule {}
