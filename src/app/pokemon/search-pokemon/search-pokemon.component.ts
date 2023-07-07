import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Route, Router } from '@angular/router';
import { Pokemon } from '../Pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
  
  searchTerm = new Subject<string>(); // Subjet Class de RXJS 
  pokemons$ : Observable<Pokemon[]>

  constructor(private pokemonService:PokemonService,private router:Router){ }
  
  
  ngOnInit(): void {

    this.pokemons$=this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term)=>this.pokemonService.searchPokemonList(term))
    )


  }


  search(term:string){
    this.searchTerm.next(term)
  }

  gotoDetail(pokemon:Pokemon){

    this.router.navigate(['/pokemons',pokemon.id])
  
  }

}
