import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { PointsShopModule } from './points-shop/points-shop.module';

@NgModule({
	exports: [PointsShopModule, HomeModule],
})
export class ShopModule {}
