import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
	DropdownComponent,
	CarouselComponent,
	GameCardComponent,
	PreviewSlideComponent,
	DropdownItemComponent,
} from './components';

@NgModule({
	declarations: [DropdownComponent, DropdownItemComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent],
	imports: [CommonModule, RouterModule],
	exports: [DropdownComponent, DropdownItemComponent, CarouselComponent, GameCardComponent, PreviewSlideComponent],
})
export class SharedModule {}
