import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empUrl = 'http://localhost:1020/getallEmployee';
  addEmpUrl = 'http://localhost:1020/addEmployee';
  constructor(
    private http: HttpClient
  ) { }

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl);
  }

  getEmpDetail(id: string): Observable<Employee> {
    return this.getEmpList().pipe(
      map((data: Employee[]) => {
        const emp = data.find(e => e.empId === parseInt(id));
        if (emp) {
          return emp;
        } else {
          throw new Error('Employee not found');
        }
      })
    );
  }

  addEmployee(empObj: Employee): Observable<any> {
    return this.http.post(this.addEmpUrl, empObj).pipe(
      catchError(error => {
        return throwError(()=>new Error(error.error.message));
      })
    );
  }
}
