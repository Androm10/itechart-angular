import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
	name: 'isControlHasErrors',
	pure: false,
})
export class IsControlHasErrorsPipe implements PipeTransform {
	transform(formGroup: FormGroup, controlName: string, errorName: string) {
		const control = formGroup.controls?.[controlName];

		if (!control) {
			return null;
		}

		return !!control.errors?.[errorName];
	}
}
