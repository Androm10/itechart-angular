import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authPages, devPages, shopPages } from '@shared/constants/pages';
import { environment } from 'src/environments/environment';
import { LoginPageComponent } from '../modules/auth/components/login-page/login-page.component';
import { SignupPageComponent } from '../modules/auth/components/signup-page/signup-page.component';
import { DevPageComponent } from '../modules/dev/components/dev-page/dev-page.component';
import { HomePageComponent } from '../modules/shop/home/components/home-page/home-page.component';
import { PointsShopPageComponent } from '../modules/shop/points-shop/components/pointsshop-page/pointsshop-page.component';
import { LayoutComponent } from './components/layout/layout.component';

let devRoutes: Routes = [];

if (!environment.production) {
	devRoutes = [
		{
			path: devPages.dev.name,
			component: DevPageComponent,
		},
	];
}

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
				path: authPages.signup.name,
				component: SignupPageComponent,
			},
			{
				path: authPages.login.name,
				component: LoginPageComponent,
			},
			...devRoutes,
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
