import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class IapSyncValidators {
	static matchPassword(password: string, passwordConfirmation: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const passwordControl = control.get(password);
			const passwordConfirmationControl = control.get(passwordConfirmation);

			if (!passwordConfirmationControl || !passwordControl) {
				return null;
			}

			if (passwordControl.value !== passwordConfirmationControl.value) {
				passwordConfirmationControl.setErrors({ passwordMismatch: true });
				return { passwordMismatch: true };
			}

			passwordConfirmationControl.setErrors(null);
			return null;
		};
	}
}
