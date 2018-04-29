import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewRecordsComponent } from './view-records/view-records.component';

const appRoutes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'view-records', component: ViewRecordsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
