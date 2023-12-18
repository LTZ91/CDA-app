import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {School} from "../models/school";
import {API_URL} from "../../environments/environment";
import {Student} from "../models/student";
import {City} from "../models/city";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpClient: HttpClient) { }

  readAllSchool(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<School[]>(`${API_URL}/School`, option)
  }

  createSchool(school: School){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.post<School>(`${API_URL}/School`,school, option)
  }

  getById(school: School){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<School>(`${API_URL}/School/${school.id}`)
  }

  getSchoolByCityName(city: string){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<School[]>(`${API_URL}/City/${city}/Schools`)
  }

  edit(school: School){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<School>(`${API_URL}/School/${school.id}`,school, option)
  }

}
