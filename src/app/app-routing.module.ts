import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { EmpListModule } from './emplist/emplist.module';
import { EmpDetailModule } from './empdetail/empdetail.module';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:'', component: WelcomeComponent},
  {path:'login', loadChildren:() => LoginModule},
  {path:'employee', loadChildren:() => EmpListModule},
  { path: 'empDetails/:id', loadChildren: () => EmpDetailModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
