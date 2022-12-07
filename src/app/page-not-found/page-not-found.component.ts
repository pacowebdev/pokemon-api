import {Component} from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    template: `
        <div class="center">
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="pokemon">
            <h3>Le pokémon n'existe pas</h3>
            <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">Retourner à l'accueil</a>
        </div>
    `
})
export class PageNotFoundComponent {
}
