import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { USER_SERVICE } from '@shared/constants/tokens';

import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';

@NgModule({
	imports: [HttpClientModule],
	providers: [
		ApiService,
		{
			provide: USER_SERVICE,
			useClass: UserService,
		},
	],
})
export class ApiModule {}
