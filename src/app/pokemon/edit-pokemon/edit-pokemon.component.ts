import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../Pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit  {
  
  pokemon:Pokemon|undefined
  
  
  constructor(private router :ActivatedRoute,private pokemonService:PokemonService){}

  ngOnInit(): void {
  
  
    const pokemonId:string|null =this.router.snapshot.paramMap.get('id')
    if(pokemonId){

      this.pokemon = this.pokemonService.getPokemonList().find(item=>item.id==+pokemonId)
    
    }
    else{
      this.pokemon=undefined
    }
  }



}
