import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getCartItems();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log(this.items);
  }
}
