import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticate = false;
  private readonly mockUser = new SignInData('Admin','Admin123');
  constructor(private route:Router) { }

  authenticate(signInData:SignInData):boolean{
      if(this.checkCredential(signInData)){
         this.isAuthenticate = true ;
         this.route.navigate(['demo']);
         return true;
      }
      this.isAuthenticate = false;
      return false
  }
  checkCredential(signInData:SignInData):boolean{
    return this.checkUsername(signInData.getusername()) && this.checkpassword(signInData.getpassword());
  }
  checkUsername(username:any):boolean{
    return username == this.mockUser.getusername(); 
  }
  checkpassword(password:any):boolean{
    return password == this.mockUser.getpassword(); 
  }
  logout(){

    this.isAuthenticate = false;
    console.log("session cleared")
    sessionStorage.removeItem('authenticaterUser')
    this.route.navigate(['home']);
  }


  login(username:string,password:string):boolean
  {
    //username==GlobalVariable.Username && password==GlobalVariable.Password
      if(true)
      {
        this.isAuthenticate = true ;
          sessionStorage.setItem('authenticaterUser', username);
          console.log(sessionStorage.getItem('authenticaterUser'));
          return true;
      }else{
        
          this.isAuthenticate = false;
          return false
      }
     
  }

  signup(email:String,password:string):boolean
  {
      return true;
  }

  isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticaterUser')
      console.log("Is user logggIn "+user) 
      return !(user === null)
    }
  
    getUserLoggedInName() {
      let user = sessionStorage.getItem('authenticaterUser')
      return user 
    }

   
}
