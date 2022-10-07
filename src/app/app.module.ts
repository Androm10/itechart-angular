import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './modules/home-page/home-page.module';
import { PointsShopPageModule } from './modules/pointsshop-page/pointsshop-page.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	SharedModule,
	HomePageModule,
	PointsShopPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
