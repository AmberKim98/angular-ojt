import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  shareBtn = 'share-btn'
  
  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('This product is shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
