import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';



//For Reactive Fornms
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    UserpageComponent,
    AdminComponent,
    PersonalDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
