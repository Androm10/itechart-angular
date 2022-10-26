import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './components';

@NgModule({
	declarations: [DropdownComponent],
	imports: [CommonModule, RouterModule],
	exports: [CommonModule, DropdownComponent],
})
export class SharedModule {}
