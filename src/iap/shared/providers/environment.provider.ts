import { Provider } from '@angular/core';

import { ENVIRONMENT } from '@shared/constants/tokens';
import { environment } from 'src/environments/environment';

export const environmentProviders: Provider[] = [
	{
		provide: ENVIRONMENT,
		useValue: environment,
	},
];
