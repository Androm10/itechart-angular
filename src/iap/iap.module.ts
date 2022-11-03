import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { interceptorsProvider } from '@shared/providers/interceptors.provider';
import { environmentProviders } from '@shared/providers/environment.provider';
import { IapRoutingModule } from './iap-routing.module';
import { LayoutModule } from './layout/layout.module';
import { IapComponent } from './iap.component';

@NgModule({
	declarations: [IapComponent],
	imports: [BrowserModule, IapRoutingModule, LayoutModule],
	providers: [...interceptorsProvider, ...environmentProviders],
	bootstrap: [IapComponent],
})
export class IapModule {}
