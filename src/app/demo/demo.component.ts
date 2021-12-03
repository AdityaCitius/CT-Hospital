import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  maxDate = new Date();
  //@Input() patientDetails!: PatientDetails;

  constructor(private _formBuilder: FormBuilder,private auth:AuthenticationService) {
    this.auth.isAuthenticate=true;
   }
 
  
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      title: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      dateOfBirth: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      race: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      gender: new FormControl('', [Validators.required]),
      ethnicity: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      languagesKnown: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', Validators.required),
      countryCode: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
    });
    this.secondFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      relationship: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.thirdFormGroup = this._formBuilder.group({});
  }
  onSubmit() {
    console.log(this.firstFormGroup);
  }

}
