import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentService} from "../../../services/student.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Student} from "../../../models/student";
import {catchError, map, of} from "rxjs";
import {SubjectService} from "../../../services/subject.service";
import {Subject} from "../../../models/subject";

@Component({
  selector: 'app-delete-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-subject.component.html',
  styleUrl: './delete-subject.component.scss'
})
export class DeleteSubjectComponent implements OnInit{

  constructor(private subjectService: SubjectService,
              private modalRef: MatDialogRef<any>) {
  }

  @Input() subjectId!: number
  subject!: Subject
  delete() {
    this.subjectService.deleteSubject(this.subjectId)
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

  ngOnInit(): void {
    console.log('id', this.subjectId)
  }
}
