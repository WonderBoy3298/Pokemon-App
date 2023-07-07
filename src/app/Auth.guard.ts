import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


export class AuthGuard implements CanActivate{
  
  
  constructor( private authService:AuthService,private route:Router ){
   
  }
  
  canActivate():boolean{
  
    if(this.authService.isLoggedIn==true){
      return true
    }else{
      this.route.navigate(['/login'])
      return false 
    }  
  
 }


  
}