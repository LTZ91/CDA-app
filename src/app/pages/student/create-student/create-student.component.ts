import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Student} from "../../../models/student";
import {StudentService} from "../../../services/student.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {SchoolService} from "../../../services/school.service";
import {School} from "../../../models/school";

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
              private formBuilder: FormBuilder,
              private schoolService: SchoolService) {
  }

  formStudent!: FormGroup;
  student !: Student;
  allSchools! : School [];
  // private dialogRef!: MatDialogRef<boolean>;
  // isOpen !: boolean;

  ngOnInit(): void{

    this.getSchools();
    if(this.student){
      this.formStudent = new FormGroup({
        id: new FormControl(this.student.id),
        name: new FormControl(this.student.name, Validators.required),
        schoolId: new FormControl(this.student.schoolId, Validators.required)
      })
    }else{
      this.formStudent = new FormGroup({
        name: new FormControl('', Validators.required),
        schoolId: new FormControl('', Validators.required),
      })
    }
  }


  create(): void{
    console.log(this.formStudent.value);
    if(this.student){
      this.studentService.edit(this.formStudent.value).subscribe()
    }
    else {
      this.studentService.createStudent(this.formStudent.value).subscribe()
    }
  }

  getSchools(){
    this.schoolService.readAllSchool().subscribe(value => {
      if(value){
        this.allSchools=value;
      }
    })

  }

  cancel() {

    this.router.navigate(['/list-all-students']);

  }
}
