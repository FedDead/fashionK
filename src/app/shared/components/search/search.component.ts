import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchInput = new FormControl('');
  public heroes: string[] = [];
  public selectedHero?: string;

  constructor( ){}

  searchHero() {
    const value: string = this.searchInput.value || '';

    // this.heroesService.getSuggestions( value )
    //   .subscribe( heroes => this.heroes = heroes );
  }


  onSelectedOption( event: string ): void {
    if ( !EventTarget ) {
      this.selectedHero = undefined;
      return;
    }

    const hero: string = event;
    // this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;

  }
}
