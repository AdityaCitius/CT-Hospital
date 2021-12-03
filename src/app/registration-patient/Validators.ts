import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators,
  } from '@angular/forms';
  
  export function firstNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const firstName: string = control.value;
      if (firstName === null || firstName === '') {
        return { errorMessage: 'First Name is required' };
      } else if (firstName.length < 2) {
        return { errorMessage: 'Minimum lenth is 2 character' };
      } else {
        return null;
      }
    };
  }
  
  export function lastNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const lastName: string = control.value;
      if (lastName === null || lastName === '') {
        return { errorMessage: 'First Name is required' };
      } else if (lastName.length < 2) {
        return { errorMessage: 'Minimum lenth is 2 character' };
      } else {
        return null;
      }
    };
  }
  
  export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email: string = control.value;
      const emailPattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');
      if (email === null || email === '') {
        return { errorMessage: 'Email is required' };
      } else if (!email.match(emailPattern)) {
        return { errorMessage: 'Please enter valid email' };
      } else {
        return null;
      }
    };
  }
  
  export function dobValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const dob: string = control.value;
      const dobPattern = new RegExp(
        '/^([0-2^([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)d{4}$/'
      );
      if (dob === null || dob === '') {
        return { errorMessage: 'DateOfBirth is required' };
      } else if (!dob.match(dobPattern)) {
        return { errorMessage: 'Please enter valid dob with datepicker option' };
      } else {
        return null;
      }
    };
  }
  
  //https://ihateregex.io/expr/phone/
  export function contactNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const contactNumber: string = control.value;
      const contactNumberPattern = new RegExp(
        '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
      );
      if (contactNumber === null || contactNumber === '') {
        return { errorMessage: 'Contact Number is required' };
      } else if (!contactNumber.match(contactNumberPattern)) {
        return { errorMessage: 'Please enter valid contact No' };
      } else {
        return null;
      }
    };
  }
  
  export function passwordValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password: string = control.value;
      if (password === null || password === '') {
        return { errorMessage: 'Password  is required' };
      } else if (password.length < 8) {
        return { errorMessage: 'Minimum lenth is 8 character' };
      } else {
        return null;
      }
    };
  }
  
  export function confirmPasswordValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const confirmPassword: string = control.value;
      if (confirmPassword === null || confirmPassword === '') {
        return { errorMessage: 'Confirm Password  is required' };
      }
      {
        return null;
      }
    };
  }