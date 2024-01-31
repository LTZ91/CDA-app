import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CityService} from "../../../services/city.service";
import {City} from "../../../models/city";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-city',
  standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-city.component.html',
  styleUrl: './create-city.component.scss'
})
export class CreateCityComponent  implements OnInit{
  constructor(public cityService: CityService,
              private router: Router,
              private formBuilder: FormBuilder,
              private modalRef: MatDialogRef<any>) {
  }

  formCity!: FormGroup;
  city!: City;
  ngOnInit(): void {

    if (this.city){
      this.formCity = new FormGroup({
        id: new FormControl(this.city.id, Validators.required),
        name: new FormControl(this.city.name, Validators.required),

      })
    }
      this.formCity = new FormGroup({
        name: new FormControl('', Validators.required),
      })
  }

  create() {
    console.log(this.formCity.value)
    if (this.formCity.value){
      this.cityService.edit(this.formCity.value).subscribe()
    }else{
      this.cityService.createCity(this.formCity.value).subscribe()
    }
    this.modalRef.close("true")
  }

  cancel() {
    this.modalRef.close(false)
  }
}
