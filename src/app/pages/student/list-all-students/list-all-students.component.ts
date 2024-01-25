import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Router} from "@angular/router";
import {Student} from "../../../models/student";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateStudentComponent} from "../create-student/create-student.component";
import {DeleteStudentComponent} from "../delete-student/delete-student.component";
import {DeleteSubjectComponent} from "../../subject/delete-subject/delete-subject.component";

@Component({
  selector: 'app-list-all-students',
  templateUrl: './list-all-students.component.html',
  styleUrl: './list-all-students.component.scss'
})
export class ListAllStudentsComponent implements OnInit{
  constructor( private studentService: StudentService,
               private router: Router,
               public dialog: MatDialog){}

  private dialogRef!: MatDialogRef<any>;
  listStudents!:  Student[];
  private studentId!: number


  ngOnInit(): void {
    this.studentService.readAll().subscribe(value => {
      this.listStudents=value
      console.log(value)
    })
  }

  onEdit(student: Student) {
    const modalRef = this.dialog.open(CreateStudentComponent)
    // this.dialogRef=this.dialog.open(CreateStudentComponent);
    // this.router.navigate(['/update-student'])
    modalRef.componentInstance.student = student;
  }

  onDelete(student: Student) {
    this.studentId = student.id;
    const dialogRef = this.dialog.open(DeleteStudentComponent);
    dialogRef.componentInstance.studentId= this.studentId

    dialogRef.afterClosed().subscribe((x ) => {
      if (x){
        this.studentService.deleteStudent(student.id).subscribe()
      }
      else {
        console.log('cancelado')
      }
    })
  }

  addItem() {
 this.dialog.open(CreateStudentComponent);
    // this.router.navigate(['/create-student'])
  }
}
