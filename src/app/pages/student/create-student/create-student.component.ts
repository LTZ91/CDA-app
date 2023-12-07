import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Student} from "../../../models/student";
import {StudentService} from "../../../services/student.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent implements OnInit{

  constructor(private studentService: StudentService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }
  formStudent!: FormGroup;
  student !: Student;
  // private dialogRef!: MatDialogRef<boolean>;
  // isOpen !: boolean;

  ngOnInit(): void{

    if(this.student){
      this.formStudent = new FormGroup({
        name: new FormControl(this.student.name, Validators.required),
        schoolId: new FormControl(this.student.school, Validators.required)
      })
    }else{
      this.formStudent = new FormGroup({
        name: new FormControl('', Validators.required),
        schoolId: new FormControl('', Validators.required)
      })
    }
  }


  create(): void{
    console.log(this.formStudent.value);
    this.studentService.createStudent(this.student).subscribe (() =>{
      //this.router.navigate(['/student'])
    })

  }
}
