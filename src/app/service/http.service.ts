import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }
  getOneUser() {
    return this.http.get('https://randomuser.me/api/');
  }

}
