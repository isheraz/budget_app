import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// custom validator to check that two fields match
export const PasswordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword.value ? { passwordMatch: true } : null;
};