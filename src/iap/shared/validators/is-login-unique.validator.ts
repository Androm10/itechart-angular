import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

import { Observable, catchError, map, of } from 'rxjs';

import { UserService } from '@shared/modules/api/services/user.service';

@Injectable()
export class IsLoginUniqueValidator implements AsyncValidator {
	constructor(private userService: UserService) {}

	validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
		return this.userService.getByLogin(control.value).pipe(
			map((user) => (user.id ? { isLoginUnique: true } : null)),
			catchError(() => of(null)),
		);
	}
}
