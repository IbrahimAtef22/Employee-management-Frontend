import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';
import { SearchModel } from '../entity/searchModel';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseURL = "http://localhost:9090/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {

    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  searchEmployees(searchedEmployee: SearchModel): Observable<Employee[]> {
    let queryParams = new HttpParams();

    queryParams = searchedEmployee.code ? queryParams.set("employeeCode", searchedEmployee.code) : queryParams;

    queryParams = searchedEmployee.name ? queryParams.set("employeeName", searchedEmployee.name) : queryParams;
    queryParams = searchedEmployee.birthDate ? queryParams.set("birthDate", searchedEmployee.birthDate.toString()) : queryParams;
    queryParams = searchedEmployee.birthCity ? queryParams.set("birthCity", searchedEmployee.birthCity) : queryParams;
    queryParams = searchedEmployee.id ? queryParams.set("employeeId", searchedEmployee.id) : queryParams;
    queryParams = searchedEmployee.department ? queryParams.set("departmentName", searchedEmployee.department) : queryParams;
    queryParams = searchedEmployee.jobTitle ? queryParams.set("jobTitle", searchedEmployee.jobTitle) : queryParams;
    queryParams = searchedEmployee.directManager ? queryParams.set("managerName", searchedEmployee.directManager) : queryParams;
    queryParams = searchedEmployee.contractType ? queryParams.set("contractType", searchedEmployee.contractType) : queryParams;
    queryParams = searchedEmployee.status ? queryParams.set("status", searchedEmployee.status) : queryParams;

    return this.httpClient.get<Employee[]>(this.baseURL, { params: queryParams });
  }


}
