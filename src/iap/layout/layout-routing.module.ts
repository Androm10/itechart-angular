import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authPages, devPages, shopPages } from '@shared/constants/pages';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from '../modules/shop/home/components/home-page/home-page.component';
import { PointsShopPageComponent } from '../modules/shop/points-shop/components/pointsshop-page/pointsshop-page.component';
import { DevPageComponent } from '../modules/dev/components/dev-page/dev-page.component';
import { SignupPageComponent } from '../modules/auth/components/signup-page/signup-page.component';
import { LoginPageComponent } from '../modules/auth/components/login-page/login-page.component';

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
