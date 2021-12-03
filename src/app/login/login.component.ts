import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication.service';

import { FormControl, FormGroup } from '@angular/forms';
import { passwordValidator, userNameValidator } from './validators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form!: FormGroup;
  user = '';
  // constructor(
  //   // private authService: AuthService,
  //  // private router: Router,
    
  // ) {}
  constructor(private router:Router,private auth:AuthenticationService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['user'];
    //this.auth.logout();
    this.form = new FormGroup(
      {
        username: new FormControl(null, [userNameValidator()]),
        password: new FormControl(null, [passwordValidator()]),
      },
      []
    );
  } 

  onSubmit(signInForm:NgForm){
    console.log("the data is here"+signInForm.value);
    const signInData = new SignInData(signInForm.value.username,signInForm.value.password);
    this.auth.authenticate(signInData); 
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  onLogin() {
    let username: string = this.form.value.username;
    let password: string = this.form.value.password;
    //console.log(username+" "+password);
    let result = this.auth.login(username, password);
    if (result) {
      //result ===
      console.log(
        'After login successfull ' + this.auth.isUserLoggedIn()
      );

      sessionStorage.setItem('isLogin', 'true');
      sessionStorage.setItem('loginsuccess', 'true');
      sessionStorage.setItem('role', this.user),
        this.router.navigate(['/demo']);
      alert('Login Successfull!');
      //here login required to set flag or navigate to particular component
      //this.router.navigate(['/dashboard']);
    } else {
      alert('LoggedIn failed, try again!');
    }
  }

}
