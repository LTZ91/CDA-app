import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Student} from "../models/student";
import {API_URL} from "../../environments/environment";
import {City} from "../models/city";
import {School} from "../models/school";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httClient: HttpClient,
              private snackBar: MatSnackBar) { }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httClient.get<City[]>(`${API_URL}/City`, option)
  }

  getCityByName(city: string){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httClient.get<City>(`${API_URL}/City/Name/${city}`)
  }

  createCity (city: City){
    const option = {headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type' : 'application/json'
      })}
    return this.httClient.post<City>(`${API_URL}/City`, city, option)
  }

  edit(city: City){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httClient.put<City>(`${API_URL}/City/${city.id}`,city, option)
  }

  deleteCity(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httClient.delete<City>(`${API_URL}/City/${id}`, option)
  }

}
