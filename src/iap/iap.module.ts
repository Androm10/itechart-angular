import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environmentProviders } from '@shared/providers/environment.provider';
import { interceptorsProvider } from '@shared/providers/interceptors.provider';
import { IapRoutingModule } from './iap-routing.module';
import { IapComponent } from './iap.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
	declarations: [IapComponent],
	imports: [BrowserModule, IapRoutingModule, LayoutModule],
	providers: [...interceptorsProvider, ...environmentProviders],
	bootstrap: [IapComponent],
})
export class IapModule {}
