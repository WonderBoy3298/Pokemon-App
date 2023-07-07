import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pockemons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http:HttpClient){}
  

  getPokemonListV2():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
    tap((res)=>console.log(res)),
    catchError((error)=>{
      console.log(error)
      return  of([])
    })
    )
  }

  getPokemonByIdV2(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`api/pokemons/${id}`)
  }

  getPokemonList():Pokemon[]{
    return POKEMONS ;
  }
  getPokemonById(id:number):Pokemon|undefined{
    return POKEMONS.find(item=>item.id==id)
  }


  updatePokemon(pokemon:Pokemon):Observable<null>{  
    const  httpOptions ={
      headers:new HttpHeaders({'Content-type':'application/json'})
    };


    return this.http.put<null>('api/pokemons',pokemon,httpOptions)
    
  }
  
  
  deletePokemon(pokemonId:number):Observable<null>{
    
   return this.http.delete<null>(`api/pokemons/${pokemonId}`)

  }

  addPokemon(pokemon:Pokemon):Observable<Pokemon>{
    const  httpOptions ={
      headers:new HttpHeaders({'Content-type':'application/json'})
    };

    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions)
  }

  getAllTypes(): string[]{
     return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poison','Fee','Vol','Combat','Psy']; 
    }


    searchPokemonList(term:string):Observable<Pokemon[]>{
        if(term.length<2){
          return of([])
        }
        return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`)

    }



}
