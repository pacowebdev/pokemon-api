import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon/pokemon";
import {POKEMONS} from "../pokemon/mock-pokemons";
import {Router} from "@angular/router";

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{

    pokemonList: Pokemon[]

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.pokemonList = POKEMONS
    }

    onGoToPokemon(pokemon: Pokemon) {
        this.router.navigate(['pokemon', pokemon.id])
    }
}
