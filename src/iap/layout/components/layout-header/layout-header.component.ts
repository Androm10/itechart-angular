import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { communityPagesArray, devPagesArray, shopPagesArray } from '@shared/constants/pages';
import { Page } from '@shared/models/layout.model';

@Component({
	selector: 'iap-layout-header',
	templateUrl: './layout-header.component.html',
	styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent implements OnInit {
	shopPages!: Array<Page>;
	communityPages!: Array<Page>;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.shopPages = shopPagesArray;
		this.communityPages = communityPagesArray;

		this.shopPages.push(...devPagesArray);
	}

	onSelectOption(value: string) {
		this.router.navigateByUrl(value);
	}
}
