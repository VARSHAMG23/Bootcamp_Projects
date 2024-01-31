import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminComponent } from './admin/admin.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AuthService } from './services/auth.service';
const routes: Routes = [
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component:LoginComponent,pathMatch:'full'},
  {path:'userpage', component:UserpageComponent,canActivate:[AuthService]},
  {path:'admin', component:AdminComponent,canActivate:[AuthService]},
  {path:'personal', component:PersonalDetailsComponent,canActivate:[AuthService]},
  {path: '**', component:PagenotfoundComponent} //This Should be always at Last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
