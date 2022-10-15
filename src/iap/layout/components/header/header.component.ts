import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DropdownOption } from '@shared/models/dropdown.models';

@Component({
	selector: 'iap-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	shopDropdownOptions: DropdownOption[] = [
		{ label: 'home', value: '/index' },
		{ label: 'wishlist', value: '/user/wishlist' },
		{ label: 'points shop', value: '/pointsshop' },
		{ label: 'news', value: '/news' },
		{ label: 'stats', value: '/stats' },
	];

	communityDropdownOptions: DropdownOption[] = [
		{ label: 'home', value: '/community' },
		{ label: 'discussions', value: '/community/discussions' },
		{ label: 'market', value: '/community/market' },
		{ label: 'workshop', value: '/community/workshop' },
		{ label: 'broadcasts', value: '/community/broadcasts' },
	];

	activeDropdown: number = -1;

	constructor(private router: Router) {}

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
