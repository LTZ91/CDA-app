import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SchoolService} from "../../../services/school.service";
import {School} from "../../../models/school";
import {CreateSchoolComponent} from "../create-school/create-school.component";
import {DeleteSchoolComponent} from "../delete-school/delete-school.component";

@Component({
  selector: 'app-list-all-schools',
  templateUrl: './list-all-schools.component.html',
  styleUrl: './list-all-schools.component.scss'
})
export class ListAllSchoolsComponent implements OnInit {
  constructor(private schoolService: SchoolService,
              private router: Router,
              public dialog: MatDialog) {
  }

  private dialogRef!: MatDialogRef<any>;
  listSchools!: School[];


  ngOnInit(): void {
    this.schoolService.readAllSchool().subscribe(value => {
      this.listSchools = value
      console.log(value)
    })
  }

  onEdit(school: School) {
    const modalRef = this.dialog.open(CreateSchoolComponent)
    modalRef.componentInstance.school = school;
  }

  onDelete(school: School) {
    const dialogRef = this.dialog.open(DeleteSchoolComponent);

    dialogRef.afterClosed().subscribe((x ) => {
      if (x){
        this.schoolService.deleteSchool(school.id).subscribe()
      }
      else {
        console.log('cancelado')
      }
    })
  }

  addItem() {
    this.dialog.open(CreateSchoolComponent);
  }
}
