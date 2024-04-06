import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';


@Component({
  selector: 'countries-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    NgFor,
    CountryTableComponent,
    LoadingSpinnerComponent,
    NgIf,
    CommonModule
  ],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private CountriesServiceries: CountriesService){}

  ngOnInit(): void {
    this.countries = this.CountriesServiceries.cacheStore.byCapital.countries;
    this.initialValue = this.CountriesServiceries.cacheStore.byCapital.term;
  }

  searchByCapital( term: string): void{

    this.isLoading = true;

    this.CountriesServiceries.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }
}
