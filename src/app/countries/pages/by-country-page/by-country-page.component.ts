import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'countries-by-countrie-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent,
    LoadingSpinnerComponent,
    NgIf
  ],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private CountriesServiceries: CountriesService){}

  ngOnInit(): void {
    this.countries = this.CountriesServiceries.cacheStore.byCountries.countries;
    this.initialValue = this.CountriesServiceries.cacheStore.byCountries.term;
  }

  searchByCountry( term: string): void{

    this.isLoading = true;

    this.CountriesServiceries.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }
}
