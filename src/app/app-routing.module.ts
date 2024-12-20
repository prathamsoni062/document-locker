import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: '*', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
