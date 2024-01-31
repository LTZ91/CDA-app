import {Component, OnInit} from '@angular/core';
import {CityService} from "../../../services/city.service";
import {Router} from "@angular/router";
import {City} from "../../../models/city";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SchoolService} from "../../../services/school.service";
import {CreateStudentComponent} from "../../student/create-student/create-student.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateCityComponent} from "../create-city/create-city.component";
import {CreateSchoolComponent} from "../../school/create-school/create-school.component";
import {Student} from "../../../models/student";
import {DeleteStudentComponent} from "../../student/delete-student/delete-student.component";
import {DeleteCityComponent} from "../delete-city/delete-city.component";

@Component({
  selector: 'app-list-all-cities',
  templateUrl: './list-all-cities.component.html',
  styleUrl: './list-all-cities.component.scss'
})
export class ListAllCitiesComponent implements OnInit{
  constructor(public cityService: CityService,
              public router: Router,
              private formBuilder: FormBuilder,
              public dialog: MatDialog
              ) {

  }
  private dialogRef!: MatDialogRef<any>;


  formCity!: FormGroup;
  city!: City;
  listCities!: City[];
  private cityId!: number


  ngOnInit(): void {


      this.cityService.readAll().subscribe(value => {
          if(value){
              this.listCities=value;
          }
      })
  }

  // getCity(){
  //   this.cityService.readAll().subscribe(value => {
  //     if(value){
  //       this.listCities=value;
  //     }
  //   })
  //
  // }
  next() {
    console.log(this.formCity.value);
    this.router.navigate(['/home'])
  }

    addItem() {

      this.dialog.open(CreateCityComponent);

    }

  edit(city: City) {
    const modalRef = this.dialog.open(CreateCityComponent)
    modalRef.componentInstance.city= city;
  }

  delete(city: City) {
    this.cityId= city.id;
    const dialogRef = this.dialog.open(DeleteCityComponent);
    dialogRef.componentInstance.cityId= this.cityId

    dialogRef.afterClosed().subscribe((x ) => {
      if (x){
        this.cityService.deleteCity(city.id).subscribe()
      }
      else {
        console.log('cancelado')
      }
    })
  }


}
