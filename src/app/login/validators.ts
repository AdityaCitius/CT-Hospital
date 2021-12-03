import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function userNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    const username: string = control.value;
    if (username === null || username === '') {
    return { errorMessage: 'Username is required' };
    } 
    else {
    return null;
    }
    };
    }

    export function passwordValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
        const password: string = control.value;
        if (password === null || password === '') {
        return { errorMessage: 'Password is required' };
        } 
        else {
        return null;
        }
        };
        }