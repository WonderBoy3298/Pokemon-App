import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit{
  
    pokemon:Pokemon
  
  ngOnInit(): void {

    this.pokemon = new Pokemon()

  }

}
