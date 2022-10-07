import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
	@Input()
  	values!: DropdownOption[];

  	@Output()
  	select: EventEmitter<string> = new EventEmitter<string>();

  	constructor() {}

  	selectOption(value: string) {
    	this.select.emit(value);
  	}
}

export interface DropdownOption {
	label: string;
	value: string;
}
