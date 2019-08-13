import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable()
export class EmployeeService {

  constructor( private httpClient:HttpClient) {  }
 

  getemployeeList(): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }

  getemployeeListbyparam(): Observable<any>{
    let param1 = new HttpParams().set('userId',"1");
    return this.httpClient.get("http://jsonplaceholder.typicode.com/posts",{params: param1})
  }

}
