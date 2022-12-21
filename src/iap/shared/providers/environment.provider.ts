import { Provider } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ENVIRONMENT } from '@shared/constants/tokens';

export const environmentProviders: Provider[] = [
	{
		provide: ENVIRONMENT,
		useValue: environment,
	},
];
