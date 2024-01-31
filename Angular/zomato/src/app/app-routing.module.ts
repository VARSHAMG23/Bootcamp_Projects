import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { UserdataComponent } from './userdata/userdata.component';



const routes: Routes = [{path: 'login', component:LoginComponent},
{path: 'register', component:SignupComponent},
{path:'',component:WelcomepageComponent,pathMatch:'full'},
{path: 'user', component:UserdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
