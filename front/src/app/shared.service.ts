import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly URL = "http://localhost:3001/api/employee";

  constructor(private http: HttpClient) { }

  getDepEmployees(){
    return this.http.get(this.URL+'/');
  }

  addEmployees(val: any){
    return this.http.post(this.URL+'/add', val);
  }

  deleteEmployee(val: any){
    return this.http.delete(this.URL+'/delete/'+ val);
  }

  updateEmployee(val1: any, val2: any){
    return this.http.put((this.URL+'/update/'+ val1), val2);
  }
}
