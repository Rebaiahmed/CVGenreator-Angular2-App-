import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppCVComponent} from './app.cv'
import { AppFormComponent} from './app.form'
import { CoreModule } from './core/core.module';



const appRoutes: Routes = [
  { path: 'app', component: AppFormComponent },

  {
    path: 'cv',
    component: AppCVComponent,
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
 
];


@NgModule({
  declarations: [
    AppComponent,
    AppCVComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
