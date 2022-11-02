import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { communityPagesArray, devPagesArray, shopPagesArray } from '@shared/constants/pages';

@Component({
	selector: 'iap-layout-header',
	templateUrl: './layout-header.component.html',
	styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent implements OnInit {
	shopPages = shopPagesArray.slice();

	communityPages = communityPagesArray.slice();

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.shopPages.push(...devPagesArray);
	}

	onSelectOption(value: string) {
		this.router.navigateByUrl(value);
	}
}
