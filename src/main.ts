import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { IapModule } from './iap/iap.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(IapModule)
	.catch((err) => console.error(err));
