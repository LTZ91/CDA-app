import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentService} from "../../../services/student.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CityService} from "../../../services/city.service";
import {Student} from "../../../models/student";
import {City} from "../../../models/city";
import {catchError, map, of} from "rxjs";

@Component({
  selector: 'app-delete-city',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-city.component.html',
  styleUrl: './delete-city.component.scss'
})
export class DeleteCityComponent {

  constructor(private cityService: CityService,
              private modalRef: MatDialogRef<any>) {
  }

  @Input() cityId!: number
  city!: City

  delete() {
    this.cityService.deleteCity(this.cityId)
      .pipe(
        map(() => this.cancel()),
        catchError(x => of(x))
      )
      .subscribe()
    this.modalRef.close("true")
  }

  cancel() {
    this.modalRef.close(false);
  }

}
