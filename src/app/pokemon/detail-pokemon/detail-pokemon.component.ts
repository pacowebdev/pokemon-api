import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemons";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  listPokemon: Pokemon[] = POKEMONS
  pokemon: Pokemon | undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id')
    if(pokemonId) {
      this.pokemon = this.listPokemon.find(pokemon => pokemon.id === +pokemonId)
    }
  }

  onGoBack() {
    this.router.navigate(['pokemons'])
  }
}
