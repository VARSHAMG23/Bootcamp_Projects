// Importing necessary modules and services
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  // Component decorator specifying its metadata
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
   // Declaring a variable to hold cart data
  cart!:Cart;
   // Constructor function for the component, injecting CartService
  constructor(private cartService:CartService) { 
    // Subscribing to the cart service to get updates
    this.cartService.getCartObservable().subscribe((cart)=>{
      // Assigning the received cart data to the component's cart variable
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }
   // Function to remove an item from the cart
  removeFromCart(cartItem: CartItem){
    // Calling the cart service to remove the item from the cart
    this.cartService.removeFromCart(cartItem.food.id);

  }
    // Function to change the quantity of an item in the cart
  changeQuantity(cartItem:CartItem,quantityInString:string){
    // Parsing the quantity from string to integer
    const quantity=parseInt(quantityInString);
    // Calling the cart service to change the quantity of the item in the cart
    this.cartService.changeQuantity(cartItem.food.id,quantity);
  }

}
