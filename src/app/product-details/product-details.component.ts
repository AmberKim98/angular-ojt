import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  showCart: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productId);
    console.log(this.product?.id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('This item is successfully added to cart!');
  }

  removeFromCart() {
    const items = this.cartService.clearCart();
    console.log('ITEMS AFTER DELETE: ', items);
  }

  showCartItems() {
    this.showCart = true;
    this.cartService.getCartItems();
  }

  hideCartItems() {
    this.showCart = false;
  }
}
