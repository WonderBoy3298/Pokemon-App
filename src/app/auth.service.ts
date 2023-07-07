import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  isLoggedIn:boolean = false

  redirectUrl:String

  login(username:string,password:string):Observable<boolean>{

      const isLoggedIn = (username=='alaoui' && password=='1234')

      return of(isLoggedIn).pipe(delay(1000),tap(isLoggedIn=>this.isLoggedIn=isLoggedIn))

  }


  logout(){
    this.isLoggedIn= false 
  }



}
