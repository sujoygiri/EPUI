import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDetailRoutingModule } from './empdetail-routing.module';
import { EmpdetailComponent } from './empdetail.component';


@NgModule({
  declarations: [
    EmpdetailComponent
  ],
  imports: [
    CommonModule,
    EmpDetailRoutingModule
  ]
})
export class EmpDetailModule { }
