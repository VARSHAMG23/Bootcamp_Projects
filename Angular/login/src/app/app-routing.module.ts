import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhasboardComponent } from './dhasboard/dhasboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';

// {path: 'Admin_login', component: AdminLoginComponent},

const routes: Routes = [{path: 'Admin_login', component: AdminLoginComponent},
{path: 'User_login', component: UserLoginComponent},
{path: 'home', component:HomeComponent},
{path: '', component: DhasboardComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
