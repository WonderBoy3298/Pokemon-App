import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  message:string ='Vous etes deconecte.(alaoui/1234)'
  name:string
  password:string

  constructor(public authService:AuthService,private router:Router){}

  ngOnInit(): void {

  }

  setMessage(){
      if(this.authService.isLoggedIn){
        this.message='Vous etes Connecter'
      }
      else{
        this.message='Identifiant ou mot de passe Incorrecte'
      }
  }


  login(){

    this.message='Tentative de conexion en cours'
    this.authService.login(this.name,this.password).subscribe(
      (isLoggedIn:boolean)=>{

      this.setMessage()
      if(isLoggedIn){
        console.log("we are here")
        this.router.navigate(['/pokemons'])
      }else{
        this.password=''
        this.router.navigate(['/login'])
      }

    })
  }
  logout(){

    this.authService.logout()
    this.setMessage()
  
  }
  

}
