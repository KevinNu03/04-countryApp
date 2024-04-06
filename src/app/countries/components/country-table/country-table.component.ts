import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'countries-country-table',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    CommonModule
  ],
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width: 25px
    }`
  ]
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
