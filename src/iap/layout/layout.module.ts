import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ModulesModule } from '../modules/modules.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';

@NgModule({
	declarations: [LayoutComponent, LayoutHeaderComponent],
	imports: [CommonModule, LayoutRoutingModule, SharedModule, ModulesModule],
	bootstrap: [LayoutComponent],
})
export class LayoutModule {}
