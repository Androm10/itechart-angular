import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DropdownComponent, HeaderComponent } from './components';

@NgModule({
	declarations: [HeaderComponent, DropdownComponent],
	imports: [CommonModule, RouterModule],
	exports: [HeaderComponent, DropdownComponent],
})
export class SharedModule {}
