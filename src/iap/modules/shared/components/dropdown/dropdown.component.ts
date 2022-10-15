import { Component, EventEmitter, Input, Output } from '@angular/core';

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

	selectOption(value: string) {
		this.selectEvent.emit(value);
	}
}

export interface DropdownOption {
	label: string;
	value: string;
}
