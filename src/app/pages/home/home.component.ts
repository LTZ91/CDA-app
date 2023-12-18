import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListAllCitiesComponent} from "../city/list-all-cities/list-all-cities.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor() {
  }

  ngOnInit(): void {

  }

}
