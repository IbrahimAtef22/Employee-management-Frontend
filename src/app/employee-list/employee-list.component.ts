import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../entity/employee';
import { SearchModel } from '../entity/searchModel';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  birthCities: string[] = [];
  departments: string[] = [];
  contractTypes: string[] = [];
  empStatus: string[] = [];

  searchedEmployee: SearchModel = {};

  constructor(private employeeService: EmployeesService) { }


  ngOnInit(): void {
    this.getEmployees();
    this.empStatus = ["Active", "In Active"];
  }

  getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data: Employee[]) => {
      console.log(data);
      this.employees = data;
      this.birthCities = Array.from(new Set(this.employees.map((item: any) => item.birthCity)));
      this.departments = Array.from(new Set(this.employees.map((item: any) => item.department.name)));
      this.contractTypes = Array.from(new Set(this.employees.map((item: any) => item.contractType)));
    })
  }

  onSubmit() {
    this.employeeService.searchEmployees(this.searchedEmployee).subscribe(data => {
      this.employees = data;
    })
  }



}
