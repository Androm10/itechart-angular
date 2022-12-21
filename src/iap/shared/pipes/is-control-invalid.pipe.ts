import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
	name: 'isControlInvalid',
	pure: false,
})
export class IsControlInvalidPipe implements PipeTransform {
	transform(control: AbstractControl) {
		return control.invalid && (control.touched || control.dirty);
	}
}
