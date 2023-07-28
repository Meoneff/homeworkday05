import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor() {}

  @Output() newItemEvent = new EventEmitter<number>();

  @Input('itemList')
  itemList!: Item[];
  
  delete(value: number){
    this.newItemEvent.emit(value);
  }
}
