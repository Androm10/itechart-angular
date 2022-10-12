import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
	CarouselComponent,
	DropdownComponent,
	GameCardComponent,
	HeaderComponent,
	PreviewSlideComponent
} from './components';

import { SlideDirective } from './components/carousel/slide.directive';



@NgModule({
  	declarations: [
		HeaderComponent,
		DropdownComponent,
		CarouselComponent,
		PreviewSlideComponent,
		GameCardComponent,
		SlideDirective,
  	],
  	imports: [
		CommonModule,
		RouterModule
	],
  	exports: [
		HeaderComponent,
		DropdownComponent,
		CarouselComponent,
		PreviewSlideComponent,
		GameCardComponent,
	]
})
export class SharedModule { }
