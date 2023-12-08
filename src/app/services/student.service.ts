import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Student} from "../models/student";
import {API_URL} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httClient: HttpClient,
              private snackBar: MatSnackBar) { }

  createStudent (student: Student){
    const option = {headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type' : 'application/json'
      })}
    return this.httClient.post<Student>(`${API_URL}/Student`, student, option)
  }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httClient.get<Student[]>(`${API_URL}/Student`, option)
  }

  edit(student: Student){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httClient.put<Student>(`${API_URL}/Student/${student.id}`,student, option)
  }

  deleteStudent(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httClient.delete<Student>(`${API_URL}/Student/${id}`, option)
  }
}
