import { UpdatePeopleComponent } from './update-people/update-people.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',component:HomeComponent 
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'people-list',component:PeopleListComponent,canActivate:[AuthGuard]
  },
  {
    path:'add-people',component:AddPeopleComponent,canActivate:[AuthGuard]
  },
  {
    path:'update-people/:id',component:UpdatePeopleComponent,canActivate:[AuthGuard]
  },
  {
    path:'**',component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
