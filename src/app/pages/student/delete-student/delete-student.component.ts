import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/student";
import {MatDialogRef} from "@angular/material/dialog";
import {catchError, map, of} from "rxjs";

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.scss'
})
export class DeleteStudentComponent {

  constructor(private studentService: StudentService,
              private modalRef: MatDialogRef<any>) {
  }

  @Input() studentId!: number
  student!: Student
  delete() {
      this.studentService.deleteStudent(this.studentId)
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
