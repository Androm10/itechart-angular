import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { shopPages } from '@shared/constants/pages';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: shopPages.home.name,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class IapRoutingModule {}
