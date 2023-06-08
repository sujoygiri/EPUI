import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpdetailComponent } from './empdetail.component';
import { EmpDetailResolve } from './empdetail.resolve';

const routes: Routes = [
  { path:'', component: EmpdetailComponent, resolve: { empDetail: EmpDetailResolve } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpDetailRoutingModule { }
