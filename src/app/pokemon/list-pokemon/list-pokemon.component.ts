import { Component ,OnInit} from '@angular/core';
import { POKEMONS } from '../mock-pockemons';
import { Pokemon } from '../Pokemon';
import { Route, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  
  pokemons: Pokemon[] 
  pokemonName : String
  
  
  ngOnInit(): void {
    
   this.pokemoneService.getPokemonListV2().subscribe(pokemonsList=>this.pokemons=pokemonsList)
    
  }
  constructor(private router:Router,private pokemoneService:PokemonService){}

  selectPokemon(event:MouseEvent){
    const index  = +(event.target as HTMLInputElement).value 
    console.log(`Vous avez selectioner le pokemon `+this.pokemons[index].name)
    this.pokemonName=this.pokemons[index].name
   }

   goToPokemon(id:number){
    this.router.navigate(['/pokemons',id])
  }  


}
