import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IapRoutingModule } from './iap-routing.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { PointsShopPageModule } from './modules/pointsshop-page/pointsshop-page.module';
import { SharedModule } from './modules/shared/shared.module';

import { IapComponent } from './iap.component';

@NgModule({
	declarations: [IapComponent],
	imports: [BrowserModule, IapRoutingModule, SharedModule, HomePageModule, PointsShopPageModule],
	bootstrap: [IapComponent],
})
export class IapModule {}
