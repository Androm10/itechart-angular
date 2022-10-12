import { Type } from '@angular/core';
import { SlideComponent } from './slide.component';

export class Slide<T> {
	constructor(public component: Type<SlideComponent<T>>, public data: T) {}
}
