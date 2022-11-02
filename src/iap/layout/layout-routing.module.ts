import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { devPages, shopPages } from '@shared/constants/pages';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from '../modules/shop/home/components/home-page/home-page.component';
import { PointsShopPageComponent } from '../modules/shop/points-shop/components/pointsshop-page/pointsshop-page.component';
import { DevPageComponent } from '../modules/dev/components/dev-page/dev-page.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: shopPages.home.name,
				component: HomePageComponent,
			},
			{
				path: shopPages.pointsshop.name,
				component: PointsShopPageComponent,
			},
			{
				path: devPages.dev.name,
				component: DevPageComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
