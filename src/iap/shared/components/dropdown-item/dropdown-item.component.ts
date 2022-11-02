import { Component, Input } from '@angular/core';

@Component({
	selector: 'iap-dropdown-item',
	templateUrl: './dropdown-item.component.html',
	styleUrls: ['./dropdown-item.component.scss'],
})
export class DropdownItemComponent {
	@Input()
	label!: string;
}
