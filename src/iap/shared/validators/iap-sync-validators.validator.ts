import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class IapSyncValidators {
	static matchControls(controlName1: string, controlName2: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const control1 = control.get(controlName1);
			const control2 = control.get(controlName2);

			if (!control2 || !control1) {
				return null;
			}

			if (control1.value !== control2.value) {
				control2.setErrors({ matchControls: true });
				return { matchControls: true };
			}

			control2.setErrors(null);

			return null;
		};
	}
}
