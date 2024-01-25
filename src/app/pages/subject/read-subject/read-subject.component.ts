import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SubjectService} from "../../../services/subject.service";
import {Subject} from "../../../models/subject";
import {CreateSubjectComponent} from "../create-subject/create-subject.component";
import {DeleteSubjectComponent} from "../delete-subject/delete-subject.component";

@Component({
  selector: 'app-read-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-subject.component.html',
  styleUrl: './read-subject.component.scss'
})
export class ReadSubjectComponent implements OnInit{
  constructor( private subjectService: SubjectService,
               private router: Router,
               public dialog: MatDialog){}

  private subjectId!: number
  private dialogRef!: MatDialogRef<any>;
  listSubjects!: Subject[];


  ngOnInit(): void {
    this.subjectService.readAllSubjects().subscribe(value => {
      this.listSubjects=value
      console.log(value)
    })
  }

  onEdit(subject: Subject) {
    const modalRef = this.dialog.open(CreateSubjectComponent)
    modalRef.componentInstance.subject=subject;
  }

  onDelete(subject: Subject) {
    this.subjectId = subject.id;
    const dialogRef = this.dialog.open(DeleteSubjectComponent);
    dialogRef.componentInstance.subjectId= this.subjectId
    dialogRef.afterClosed().subscribe((x ) => {
      if (x){
        this.subjectService.deleteSubject(subject.id).subscribe()
      }
      else {
        console.log('cancelado')
      }
    })
  }

  addItem() {
    this.dialog.open(CreateSubjectComponent);
    // this.router.navigate(['/create-student'])
  }
}

