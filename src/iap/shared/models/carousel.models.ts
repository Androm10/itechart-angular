import { Type } from '@angular/core';

export interface SlideComponent<T> {
	data: T;
}

export class Slide<T> {
	constructor(public component: Type<SlideComponent<T>>, public data: T) {}
}
