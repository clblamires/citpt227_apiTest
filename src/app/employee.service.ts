import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = "https://clblamires.000webhostapp.com/api.php/records/employees";

  constructor( public http: HttpClient ) {}

  getEmployees(){
    return this.http.get<Employee>( this.url + "?order=lastname");
  }
}
