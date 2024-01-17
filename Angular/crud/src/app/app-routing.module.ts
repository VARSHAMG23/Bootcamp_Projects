import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserpageComponent } from './userpage/userpage.component';
const routes: Routes = [
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component:SignupComponent,pathMatch:'full'},
  {path:'userpage', component:UserpageComponent},
  {path: '**', component:PagenotfoundComponent} //This Should be always at Last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
