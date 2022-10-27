import { NgModule } from '@angular/core';

import { DevModule } from './dev/dev.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
	exports: [ShopModule, DevModule],
})
export class ModulesModule {}
