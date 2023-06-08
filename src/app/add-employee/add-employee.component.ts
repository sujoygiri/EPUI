import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../emplist/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm!: FormGroup;
  message!: string;
  errorMsg!: any;
  @Output() childToParent = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService
  ) { }

  addEmployee() {
    console.log(this.addEmployeeForm.value);
    console.log(this.addEmployeeForm);
    
    this.empService.addEmployee(this.addEmployeeForm.value).subscribe(
      (data: any) => {
        this.message = data.message;
        this.errorMsg = undefined;
        // update parent method with true
        this.childToParent.emit(true);
      },
      (error: any) => {
        this.errorMsg = error;
        this.message = "";
        // update parent method with true
        this.childToParent.emit(true);
      }
    );
  }

  closeModal() {
    // update parent method with true
    this.childToParent.emit(true);
  }

  customJobLevel(jobLevel: FormControl) {
    // custom validation for job level to be between 3 to 8
    if (jobLevel.value < 3 && jobLevel.value > 8) {
      return { 'jobLevel': true };
    }
    return null;
  }

  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      empName: ['', Validators.required],
      empId: ['', Validators.required],
      empLocation: ['', Validators.required],
      jobLevel: ['', [Validators.required, this.customJobLevel]],
      gender: ['', Validators.required],
      yearOfExperience: ['', Validators.required],
      phoneNo: ['', Validators.required],
      noOfProjectsWorked: ['', Validators.required],
    });
  }

}
