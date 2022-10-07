import { NgModule } from '@angular/core';
import { DropdownComponent, HeaderComponent } from './components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  	declarations: [
		HeaderComponent,
		DropdownComponent
  	],
  	imports: [
		CommonModule,
		RouterModule
	],
  	exports: [
		HeaderComponent,
		DropdownComponent
	]
})
export class SharedModule { }
