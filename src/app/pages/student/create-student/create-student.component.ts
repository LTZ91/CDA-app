import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {

}
