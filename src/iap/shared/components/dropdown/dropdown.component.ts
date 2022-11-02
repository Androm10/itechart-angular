import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { DropdownOption } from '@shared/models/dropdown.models';

@Component({
	selector: 'iap-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
	@Input()
	values!: DropdownOption[];

	@Output()
	selectEvent: EventEmitter<string> = new EventEmitter<string>();

	isMouseOver = false;

	@HostListener('mouseover')
	onMouseOver() {
		this.isMouseOver = true;
	}

	@HostListener('mouseout')
	onMouseOut() {
		this.isMouseOver = false;
	}

	selectOption(value: string) {
		this.selectEvent.emit(value);
	}
}
