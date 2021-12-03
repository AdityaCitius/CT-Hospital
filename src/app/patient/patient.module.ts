import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { VisitdetailsComponent } from './visitdetails/visitdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';

import { MatRadioModule } from '@angular/material/radio';

import { MatSelectModule } from '@angular/material/select';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatStepperModule } from '@angular/material/stepper';

import { MatExpansionModule } from '@angular/material/expansion';

// import { VisitdetailsComponent } from './visitdetails/visitdetails.component';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'patientdetails',
    component: PatientdetailsComponent,
  },
];

@NgModule({
  declarations: [PatientdetailsComponent, VisitdetailsComponent],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PatientModule {}
