import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeService } from './services/employee.service';
import  {employeeList} from './classes/employeeList';
import { posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private employeeService:EmployeeService){}

   lstemployee : employeeList[];

   posts: posts[];
  
   ngOnInit(){

    this.employeeService.getemployeeList()
    .subscribe(
      data=>
      {
        this.lstemployee=data;
        //console.log(data);
      }
    );


    this.employeeService.getemployeeListbyparam()
    .subscribe(
      data=>
      {
        this.posts=data;
      }
    );
  }
}
