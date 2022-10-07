import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/components/home-page/home-page.component';
import { PointsShopPageComponent } from './modules/pointsshop-page/components/pointsshop-page/pointsshop-page.component';

const routes: Routes = [
	{
		path: 'index',
		component: HomePageComponent
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'index'
	},
	{
		path: 'pointsshop',
		component: PointsShopPageComponent
	},
	// {
	// 	path: '**',
	// 	redirectTo: 'index'
	// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
