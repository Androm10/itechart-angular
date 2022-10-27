import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DropdownOption } from '@shared/models/dropdown.models';
import { communityPagesArray, devPagesArray, shopPagesArray } from '@shared/constants/pages';

@Component({
	selector: 'iap-layout-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class LayoutHeaderComponent implements OnInit {
	shopDropdownOptions: DropdownOption[] = [];

	communityDropdownOptions: DropdownOption[] = [];

	activeDropdown: number = -1;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.shopDropdownOptions = shopPagesArray.map((page) => ({
			label: page.title,
			value: page.absolutePath,
		}));
		this.communityDropdownOptions = communityPagesArray.map((page) => ({
			label: page.title,
			value: page.absolutePath,
		}));

		this.shopDropdownOptions.unshift(
			...devPagesArray.map((page) => ({
				label: page.title,
				value: page.absolutePath,
			})),
		);
	}

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
