import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
	name: 'isControlInvalidErrors',
	pure: false,
})
export class IsControlInvalidPipe implements PipeTransform {
	transform(formGroup: FormGroup, controlName: string) {
		const control = formGroup.controls?.[controlName];

		if (!control) {
			return null;
		}

		return control.invalid && (control.touched || control.dirty);
	}
}
