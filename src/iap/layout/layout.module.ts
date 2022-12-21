import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ModulesModule } from '../modules/modules.module';
import { LayoutHeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
	declarations: [LayoutComponent, LayoutHeaderComponent],
	imports: [CommonModule, LayoutRoutingModule, SharedModule, ModulesModule],
	bootstrap: [LayoutComponent],
})
export class LayoutModule {}
