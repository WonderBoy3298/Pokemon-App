import { Component,Input,OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../Pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent  implements OnInit{
  
  @Input() pokemon:Pokemon
  types:string[];


  constructor(private pokemonService:PokemonService,private router:Router){}
  


  isAddForm:boolean
  ngOnInit(): void {
    this.types=this.pokemonService.getAllTypes()
    
    this.isAddForm=this.router.url.includes('add')
  
  }

  hasType(type:string):boolean{
    return this.pokemon.types.includes(type)
  }


  isTypesValid(type:string):boolean{
      
     if(this.pokemon.types.length==1 && this.hasType(type)){
        return false ; 
     }
     if(this.pokemon.types.length>2 && this.hasType(type)){
      return false
     }
    
    return true ; 
  }

  selectType($event:Event,type:string){

    const isChecked :boolean = ($event.target as HTMLInputElement).checked
    
    if(isChecked){
        this.pokemon.types.push(type);
    }else{
      const index=this.pokemon.types.indexOf(type)
      this.pokemon.types.splice(index,1)
    }

  }

  onSubmit(){
    
   if(this.isAddForm){
      this.pokemonService
      .addPokemon(this.pokemon)
      .subscribe((pokemon2:Pokemon)=>{this.router.navigate(['/pokemons',pokemon2.id])})
   
    }else{
    this.pokemonService.updatePokemon(this.pokemon).subscribe(()=>{this.router.navigate(['/pokemons',this.pokemon.id])})
  
     }
   
  }



}
