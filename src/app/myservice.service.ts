import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http : HttpClient) { }
  showTodayDate(){
    let ndate= new Date();
    return ndate;
  }
  getData(){
    return this.http.get(this.apiurl);
  }
}
