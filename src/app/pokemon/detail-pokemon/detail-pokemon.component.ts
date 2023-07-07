import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pockemons';
import { Pokemon } from '../Pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route :Router,
    private pokemonService:PokemonService){  }

  pokemonList : Pokemon[];
   pokemon : Pokemon|undefined
  


   ngOnInit(): void {

    this.pokemonList=POKEMONS
    const pokemonId : string|null  = this.router.snapshot.paramMap.get('id') 

    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon=>pokemon.id==+pokemonId)
    }else{
      this.pokemon=undefined
    }

  }

  goBack():void{

    this.route.navigate(['/pokemons'])

  }

  goToEdit(id:number):void{
    this.route.navigate(['pokemons/edit',id])
  }

  deletePokemon(id:number){
    this.pokemonService.deletePokemon(id).subscribe(()=>{this.goBack()})
  }
  

}
