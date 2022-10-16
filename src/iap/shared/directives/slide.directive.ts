import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[slideHost]',
})
export class SlideDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}
