import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get('http://202.65.158.172:9092/serviceinfo/1/all/1');
  }
}
