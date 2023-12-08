import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {FootrComponent} from "./template/footr/footr.component";
import {CreateStudentComponent} from "./pages/student/create-student/create-student.component";
import {ListAllStudentsComponent} from "./pages/student/list-all-students/list-all-students.component";
import {ListAllSchoolsComponent} from "./pages/school/list-all-schools/list-all-schools.component";
import {ListAllCitiesComponent} from "./pages/city/list-all-cities/list-all-cities.component";
import {ReadSubjectComponent} from "./pages/subject/read-subject/read-subject.component";
import {UpdateStudentComponent} from "./pages/student/update-student/update-student.component";
import {DeleteStudentComponent} from "./pages/student/delete-student/delete-student.component";

export const routes: Routes = [
  {
    path:'', component:
    HomeComponent
  },
  {
    path:'home', component:
    HomeComponent
  },
  {
    path:'login', component:
    LoginComponent
  },
  {
    path:'footr', component:
    FootrComponent
  },
  {
    path:'create-student', component:
    CreateStudentComponent
  },
  {
    path:'update-student', component:
   UpdateStudentComponent
  },
  {
    path:'delete-student', component:
    DeleteStudentComponent
  },
  {
    path:'list-all-students', component:
    ListAllStudentsComponent
  },
  {
    path:'list-all-schools', component:
    ListAllSchoolsComponent
  },
  {
    path:'list-all-cities', component:
    ListAllCitiesComponent
  },
  {
    path:'read-subject', component:
    ReadSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

