import { Injectable, Inject } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

import { USER_SERVICE } from '@shared/constants/tokens';
import { IUserService } from '@shared/interfaces/user-service.interface';

@Injectable()
export class IsLoginUniqueValidator implements AsyncValidator {
	constructor(@Inject(USER_SERVICE) private userService: IUserService) {}

	validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
		return this.userService.getByLogin(control.value).pipe(
			map((user) => (user.id ? { hasTaken: true } : null)),
			catchError(() => of(null)),
		);
	}
}
