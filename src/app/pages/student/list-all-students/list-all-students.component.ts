import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Router} from "@angular/router";
import {Student} from "../../../models/student";

@Component({
  selector: 'app-list-all-students',
  templateUrl: './list-all-students.component.html',
  styleUrl: './list-all-students.component.scss'
})
export class ListAllStudentsComponent implements OnInit{
  constructor( private studentService: StudentService,
               private router: Router){}


  listStudents!:  Student[];

  ngOnInit(): void {
    this.studentService.readAll().subscribe(value => {
      this.listStudents=value
      console.log(value)
    })
  }

  onEdit(clients: any) {

  }

  onDelete(clients: any) {

  }

  adicionarItem() {

  }
}
