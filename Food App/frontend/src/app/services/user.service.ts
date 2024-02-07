import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';

const USER_KEY='User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject =new BehaviorSubject<User>(this.getUserFromLocalStorgae());
  public userObservable: Observable<User>;
  constructor(private http:HttpClient,private toastrService:ToastrService) {

    this.userObservable = this.userSubject.asObservable();
   }

   public get currentUser(): User {
            return this.userSubject.value;
   }

   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(tap({
      next:(user:any)=>{
        this.setUserToLocalStorgae(user);
       this.userSubject.next(user);
       this.toastrService.success(`Welcome to Flavours ${user.name}`,
       `Login successful`)

      },
      error:(errorResponse:any)=>{
          this.toastrService.error(errorResponse.error,'Login Failed');
      }
    }));
   }
   register(userRegiser:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorgae(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Flavours ${user.name}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    //to refresh page
    window.location.reload();
   }
//To get item from local Storage
   private setUserToLocalStorgae(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
   }

   private getUserFromLocalStorgae():User{
    const userJson=localStorage.getItem(USER_KEY);
    //user object
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
   }
}
