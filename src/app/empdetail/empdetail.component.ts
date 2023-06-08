import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../emplist/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  empDetail!: Employee;
  empId!: string;
  error: any;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) { }

  getEmpDetail(id: string) {
    this.employeeService.getEmpDetail(id).subscribe(
      data => this.empDetail = data,
      error => this.error = error
    );
  }

  ngOnInit(): void {
    this.empDetail = new Employee();
    // retrieve the empDetail from resolver
    let empDetail: Observable<any> = this.route.snapshot.data['empDetail'];
    empDetail.subscribe({
      next: data => {
        this.empDetail = data.empDetail;
      },
      error: error => {
        this.error = error.message;
      }
    });
  }

}
