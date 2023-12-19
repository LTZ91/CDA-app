import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../environments/environment";
import {Subject} from "../models/subject";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient: HttpClient) {}

  readAllSubjects(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<Subject[]>(`${API_URL}/Subject`, option)
  }

  deleteSubject(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<Subject>(`${API_URL}/Subject/${id}`, option)
  }
  createSubject (subject: Subject){
    const option = {headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type' : 'application/json'
      })}
    return this.httpClient.post<Subject>(`${API_URL}/Subject`, subject, option)
  }

  edit(subject: Subject){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<Subject>(`${API_URL}/Subject/${subject.id}`,subject, option)
  }
}
