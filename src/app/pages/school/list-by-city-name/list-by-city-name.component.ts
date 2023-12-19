import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SchoolService} from "../../../services/school.service";
import {School} from "../../../models/school";
import {CreateStudentComponent} from "../../student/create-student/create-student.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateSchoolComponent} from "../create-school/create-school.component";
import {CityService} from "../../../services/city.service";
import {City} from "../../../models/city";
import {DeleteSchoolComponent} from "../delete-school/delete-school.component";

@Component({
  selector: 'app-list-by-city-name',
  templateUrl: './list-by-city-name.component.html',
  styleUrl: './list-by-city-name.component.scss'
})
export class ListByCityNameComponent implements  OnInit{
  constructor( private schoolService: SchoolService,
               private router: Router,
               private route: ActivatedRoute,
               public dialog: MatDialog,
               public cityService: CityService) {
  }
  private dialogRef!: MatDialogRef<any>;
  city!: string;
  name!: City;
  schoolsByCity!: School[];
  ngOnInit(): void {
    this.route.params.subscribe(value=>{
      if(value){
         this.city = value["name"]
        this.schoolService.getSchoolByCityName(this.city).subscribe(value => {
          this.schoolsByCity=value
          console.log(value)
        })

        this.cityService.getCityByName(this.city).subscribe(value=>{
          if (value){
            this.name = value
            console.log(value)
          }
        })
      }
    })
  }

  onEdit(school: School) {

    const modalRef = this.dialog.open(CreateSchoolComponent)
    // this.dialogRef=this.dialog.open(CreateStudentComponent);
    // this.router.navigate(['/update-student'])
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

  adicionarItem(city: number) {
    const modalRef=this.dialog.open(CreateSchoolComponent);
    modalRef.componentInstance.city=city;
  }
}
