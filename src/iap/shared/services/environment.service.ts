import { Inject, Injectable, Optional } from '@angular/core';

import { ENVIRONMENT } from '@shared/constants/tokens';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
	constructor(@Optional() @Inject(ENVIRONMENT) private readonly environment: any) {}

	getValue(key: string) {
		return this.environment[key];
	}
}
