import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';

import { HttpErrorInterceptor } from '@shared/interceptors/http-error.interceptor';
import { HttpTokenInterceptor } from '@shared/interceptors/http-token.interceptor';

export const interceptorsProvider: Provider[] = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpTokenInterceptor,
		multi: true,
	},
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpErrorInterceptor,
		multi: true,
	},
];
