import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PointsShopPageComponent } from './components/pointsshop-page/pointsshop-page.component';

@NgModule({
	declarations: [
		PointsShopPageComponent
  	],
  	imports: [
    	CommonModule,
  	],
  	providers: [],
  	exports: [PointsShopPageComponent]
})
export class PointsShopPageModule { }
