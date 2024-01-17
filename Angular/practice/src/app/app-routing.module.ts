import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [{path: 'user', component: UserComponent},
{path: 'admin', component: AdminComponent},
{path: 'login', component: LoginComponent},

{path: 'home', component: HomeComponent,canActivate: [AuthGuardService]},
{path: '', component: UserComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
