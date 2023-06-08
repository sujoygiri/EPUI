import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmplistComponent } from './emplist.component';
import { EmployeeResolve } from './employee.resolve';

const routes: Routes = [
  { path:'', component: EmplistComponent, resolve: { empList: EmployeeResolve } },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpListRoutingModule { }
