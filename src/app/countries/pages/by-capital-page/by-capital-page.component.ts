import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { NgFor } from '@angular/common';


@Component({
  selector: 'countries-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    NgFor,
  ],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  constructor(public CountriesServiceries?: CountriesService){}

  searchByCapital( term: string){
    this.CountriesServiceries?.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
    })
  }
}
