import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input() public placheholder: string = '';

  @Output() public onValue = new EventEmitter<string>();

  emitValue(value:string):void{
    this,this.onValue.emit(value);
  }
}
