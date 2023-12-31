import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Input() index: any;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  confirmDelete(id: any) {
      this.onRemove.emit(id);
  }
  // removeItem(id: any) {
  //   this.onRemove.emit(id);
  // }
}
