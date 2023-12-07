import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footr',
  standalone: false,
  templateUrl: './footr.component.html',
  styleUrl: './footr.component.scss'
})
export class FootrComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {}
  onLogout() {
    console.log('teste')
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('email')
    this.router.navigate(['/login'])
  }
}
