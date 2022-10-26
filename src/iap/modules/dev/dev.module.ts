import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DevPageComponent } from './components/dev-page/dev-page.component';

@NgModule({
	declarations: [DevPageComponent],
	imports: [SharedModule],
	exports: [DevPageComponent],
})
export class DevModule {}
