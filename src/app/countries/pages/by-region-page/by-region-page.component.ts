import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent,
    LoadingSpinnerComponent,
    NgIf,
    NgFor,
    CommonModule
  ],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading = false;
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europ', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private CountriesServiceries: CountriesService){}
  ngOnInit(): void {
    this.countries = this.CountriesServiceries.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesServiceries.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region): void{
    this.selectedRegion = region
    this.isLoading = true;

    this.CountriesServiceries.searchRegion(region)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }
}
