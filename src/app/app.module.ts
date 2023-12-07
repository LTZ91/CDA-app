import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {NavBarComponent} from "./template/nav-bar/nav-bar.component";
import {FootrComponent} from "./template/footr/footr.component";
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CreateStudentComponent} from "./pages/student/create-student/create-student.component";
import { ListAllStudentsComponent } from './pages/student/list-all-students/list-all-students.component';
import { ListAllStudentSubjectComponent } from './pages/studentSubject/list-all-student-subject/list-all-student-subject.component';
import { ListAllSchoolsComponent } from './pages/school/list-all-schools/list-all-schools.component';
import { ListAllCitiesComponent } from './pages/city/list-all-cities/list-all-cities.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FootrComponent,
    ListAllStudentsComponent,
    ListAllStudentSubjectComponent,
    ListAllSchoolsComponent,
    ListAllCitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NavBarComponent,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgbModule,
    CreateStudentComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
