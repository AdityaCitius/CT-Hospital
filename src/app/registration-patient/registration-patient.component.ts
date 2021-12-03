import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidators, contactNumberValidator, dobValidator, emailValidator, firstNameValidator, lastNameValidator, passwordValidators } from '../registration-patient/Validators';

@Component({
  selector: 'app-registration-patient',
  templateUrl: './registration-patient.component.html',
  styleUrls: ['./registration-patient.component.css']
})
export class RegistrationPatientComponent implements OnInit {

  form!: FormGroup;
  options :string[]=["Mr","Ms.","Mrs.","Dr."];
   emailPattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required
       
      ]),
      firstName: new FormControl(null, [
        firstNameValidator()
           ]),
      lastName: new FormControl(null, [
        lastNameValidator()
      ]),
      email: new FormControl(null, [
        emailValidator()
      ]),
      dob: new FormControl(null, [
        dobValidator()
      ]),
      contactNumber: new FormControl(null, [
        contactNumberValidator()
      ]),
      password:new FormControl(null, [
        passwordValidators()
      ]),
      confirmPassword:new FormControl(null, [
        confirmPasswordValidators()
      ]),
    });
  }
  onSubmit()
  {
    console.log(this.form);

  }

  onClear()
  {
    this.form.reset();
  }
}
