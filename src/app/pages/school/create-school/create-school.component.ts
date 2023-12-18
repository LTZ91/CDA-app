import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {StudentService} from "../../../services/student.service";
import {Router} from "@angular/router";
import {SchoolService} from "../../../services/school.service";
import {School} from "../../../models/school";
import {CityService} from "../../../services/city.service";
import {City} from "../../../models/city";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-school',
  standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-school.component.html',
  styleUrl: './create-school.component.scss'
})
export class CreateSchoolComponent implements OnInit {
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private schoolService: SchoolService,
              private cityService: CityService) {
  }
   @Input() city!: number;
  formSchool!: FormGroup;
  school!: School;
  cities!: City[];

  ngOnInit(): void {

    console.log(this.city)
    this.getCities();
    if (this.formSchool) {
      this.formSchool = new FormGroup({
        id: new FormControl(this.school.id),
        name: new FormControl(this.school.name, Validators.required),
        cityId: new FormControl(this.school.cityId, Validators.required)
      })
    } else{
      if (this.city){
        this.formSchool = new FormGroup({
          name: new FormControl('', Validators.required),
          cityId: new FormControl(this.city, Validators.required),
        })
      }
      else {
        this.formSchool = new FormGroup({
          name: new FormControl('', Validators.required),
          cityId: new FormControl('', Validators.required),
        })
      }
    }


  }

  create() {

    console.log(this.formSchool.value)
    if(this.school){
      this.schoolService.edit(this.formSchool.value).subscribe()
    }
    else {
      this.schoolService.createSchool(this.formSchool.value).subscribe()
    }
  }

  cancel() {

  }

  getCities(){
    this.cityService.readAll().subscribe(value => {
      if(value){
        this.cities=value;
      }
    })

  }

}

