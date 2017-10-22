import { Component } from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http';
import { TestService } from './core/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.cv.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppCVComponent {
  title = 'app';


  cv: any = {};
  jsondata : any ={};
  xmldata : any ={}


  testServerData;
  constructor(
      private testService: TestService,
      private http: Http
  ) {


   
  }



   















}
