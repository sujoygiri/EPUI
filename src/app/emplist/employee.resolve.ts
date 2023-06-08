import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Resolve } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from './employee.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeeResolve implements Resolve<Employee[]> {

    constructor(private employeeService: EmployeeService) { }

    resolve(): Observable<any> {
        // retrieve employee list values from service
        return this.employeeService.getEmpList().pipe(map((data) => {            
            return of({ empList: data });
        }),
            catchError((error) => of({ errorMsg: error }))
        );
    }
}
