import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ModulesModule } from '../modules/modules.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [LayoutComponent, HeaderComponent],
	imports: [CommonModule, LayoutRoutingModule, SharedModule, ModulesModule],
	bootstrap: [LayoutComponent],
})
export class LayoutModule {}
