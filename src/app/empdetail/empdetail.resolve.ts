import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Employee } from '../employee';

import { EmployeeService } from '../emplist/employee.service';

@Injectable({
    providedIn: 'root'
})
export class EmpDetailResolve implements Resolve<Employee[]> {

    constructor(private employeeService: EmployeeService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        // retrieve employee detail for selected empId
        let empId = route.paramMap.get('id');
        if (empId) {
            return this.employeeService.getEmpDetail(empId).pipe(map((data) => {
                return of({ empDetail: data });
            }),
                catchError((error) => of({ errorMsg: error }))
            );
        } else {
            return of({ empDetail: new Employee() });
        }
    }
}
