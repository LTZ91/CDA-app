import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SubjectService} from "../../../services/subject.service";
import {Router} from "@angular/router";
import {Subject} from "../../../models/subject";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-subject',
  standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-subject.component.html',
  styleUrl: './create-subject.component.scss'
})
export class CreateSubjectComponent implements OnInit{
  constructor(public subjectService: SubjectService,
              private router: Router,
              private formBuilder: FormBuilder,
              private modalRef: MatDialogRef<any>) {
  }

  formSubject!: FormGroup;
  subject!: Subject;
  ngOnInit(): void {
    if (this.formSubject) {
      this.formSubject= new FormGroup({
        id: new FormControl(this.subject.id),
        name: new FormControl(this.subject.name, Validators.required),
      })
    } else {
      this.formSubject = new FormGroup({
        name: new FormControl('', Validators.required),
      })
    }
  }

  create(): void{
    console.log(this.formSubject.value);
    if(this.subject){
      this.subjectService.edit(this.formSubject.value).subscribe()
    }
    else {
      this.subjectService.createSubject(this.formSubject.value).subscribe()
    }
    this.modalRef.close("true")
  }


  cancel() {

    this.modalRef.close(false);

  }
}
