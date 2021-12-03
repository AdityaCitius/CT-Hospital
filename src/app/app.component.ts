import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CT-Hospital';
  constructor(private dialog: MatDialog,private router:Router,public auth:AuthenticationService) { }

  openPopup() {
    const popUp= this.dialog.open(PopupComponent)
    popUp.afterClosed().subscribe(()=>{
    })
  } 


  logout(){
    
    sessionStorage.clear();
    this.auth.logout();
    
  }
}
