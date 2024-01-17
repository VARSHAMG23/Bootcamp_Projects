import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {path: 'form', component: FormComponent},
// {path: 'display', component: DisplayComponent},
{path: 'display', component: DisplayComponent,canActivate:[AuthGuardService]}, 
{path: '', component: FormComponent,pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
