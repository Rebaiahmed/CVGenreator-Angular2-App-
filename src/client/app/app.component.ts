import { Component } from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http';
import { TestService } from './core/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent {
  title = 'app';


  cv: any = {};
  jsondata : any ={};
  xmldata : any ={}


  testServerData;
  constructor(
      private testService: TestService,
      private http: Http
  ) {


    this
    .http.get('http://localhost:8020/api',)
    .subscribe(
      data => {
       console.log('data' + JSON.stringify(data));
       
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }

  testServer() {
    this.testService.testRequest()
        .then(data => {
          this.testServerData = data._body;
          console.log('data', this.testServerData);
        })
        .catch(error => {
            this.testServerData = 'ERROR';
        })
  }


   





  JSON()
  {
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });
    console.log("henerer json" + this.cv);
    this
    .http.post('http://localhost:8020/api/JSON',this.cv,options)
    .subscribe(
      data => {
        console.log("data json0" + JSON.stringify(data));
        this.jsondata = data ;
        
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
    

    
  }


  XML()
{
  let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  let options       = new RequestOptions({ headers: headers });
  console.log("henerer json" + this.cv);
  this
  .http.post('http://localhost:8020/api/XML',this.cv,options)
  .subscribe(
    data => {
      console.log("data xml0" + JSON.stringify(data));
      this.xmldata = data ;
      
    },
    error => {
      console.log(JSON.stringify(error.json()));
    }
  )
}








}
