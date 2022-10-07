import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownOption } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor(private router: Router) {}

	shopDropdownOptions: DropdownOption[] = [
		{label: 'home', value: '/index'},
		{label: 'wishlist', value: '/user/wishlist'},
		{label: 'points shop', value: 'pointsshop'},
		{label: 'news', value: '/news'},
		{label: 'stats', value: '/stats'},
	];

	communityDropdownOptions: DropdownOption[] = [
		{label: 'home', value: '/community'},
		{label: 'discussions', value: '/community/discussions'},
		{label: 'market', value: '/community/market'},
		{label: 'workshop', value: '/community/workshop'},
		{label: 'broadcasts', value: '/community/broadcasts'},
	];

	activeDropdown: number = -1;

	onMouseOver(number: number) {
		this.changeActiveDropdown(number);
	}

	onMouseOut() {
		this.changeActiveDropdown(-1);
	}

	onSelectOption(value: string) {
		this.router.navigateByUrl(value);
	}

	private changeActiveDropdown(number: number) {
		this.activeDropdown = number;
	}

}
