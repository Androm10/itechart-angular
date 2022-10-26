import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ModulesModule } from '../modules/modules.module';

@NgModule({
	declarations: [LayoutComponent, HeaderComponent],
	imports: [LayoutRoutingModule, SharedModule, ModulesModule],
	bootstrap: [LayoutComponent],
})
export class LayoutModule {}
