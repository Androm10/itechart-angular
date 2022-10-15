import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IapRoutingModule } from './iap-routing.module';
import { LayoutModule } from './layout/layout.module';

import { IapComponent } from './iap.component';

@NgModule({
	declarations: [IapComponent],
	imports: [BrowserModule, IapRoutingModule, LayoutModule],
	bootstrap: [IapComponent],
})
export class IapModule {}
