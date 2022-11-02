import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { DevModule } from './dev/dev.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
	exports: [ShopModule, DevModule, AuthModule],
})
export class ModulesModule {}
