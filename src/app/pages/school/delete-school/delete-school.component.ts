import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogRef} from "@angular/material/dialog";
import {catchError, map, of} from "rxjs";
import {SchoolService} from "../../../services/school.service";
import {School} from "../../../models/school";

@Component({
  selector: 'app-delete-school',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-school.component.html',
  styleUrl: './delete-school.component.scss'
})
export class DeleteSchoolComponent {

  constructor(private schoolService: SchoolService,
              private modalRef: MatDialogRef<any>) {
  }

  @Input() schoolId!: number
  school!: School
  delete() {
    this.schoolService.deleteSchool(this.schoolId)
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
