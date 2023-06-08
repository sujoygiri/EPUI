import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpListRoutingModule } from './emplist-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmplistComponent } from './emplist.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { FilterPipe } from '../filter.pipe';


@NgModule({
  declarations: [
    EmplistComponent,
    AddEmployeeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpListRoutingModule
  ]
})
export class EmpListModule { }
