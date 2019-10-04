import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  employees: any;

  constructor( public employeeService: EmployeeService ) {
    this.employeeService.getEmployees().subscribe( data => {
      console.log(data);
      this.employees = data.records;
    })
  }

}
