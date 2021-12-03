import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:"full"
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login/:user',component:LoginComponent
  },
  {
    path:'demo',component:DemoComponent
  },
  {
    path:'patient-registration',
    component:RegistrationPatientComponent
  },
  
  // {
  //   path:'home',component:HomeComponent,canActivate:[AuthGuard]
  // },
  {
    path:'registrationdetails',component:RegistrationDetailsComponent,canActivate:[AuthGuard]
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
