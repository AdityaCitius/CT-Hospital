import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage1 =
  'Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place? ';
  
  errorMessage2='and try from there.';
  constructor() { }

  ngOnInit(): void {
  }

}
