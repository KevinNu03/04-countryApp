import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    SearchBoxComponent
  ],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

}
