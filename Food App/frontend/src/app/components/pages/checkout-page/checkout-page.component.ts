// Importing necessary modules, services, and components
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
 // Declaring an order variable of type Order to hold order data
 order:Order=new Order();
 
 // Declaring a checkoutForm variable of type FormGroup for handling form data
 checkoutForm!: FormGroup;

// Constructor function for the component, injecting required services
// OrderService for order-related operations
// UserService for managing user data
// CartService for managing cart operations
// FormBuilder for creating form groups
// ToastrService for displaying toast notifications

constructor(private router:Router,private orderService:OrderService,private userService: UserService,private cartService: CartService,private formBuilder: FormBuilder,private toastrService: ToastrService) {
   
   // Retrieving cart data and assigning it to the order variable
   const cart = this.cartService.getCart();
   this.order.items = cart.items;
   this.order.totalPrice = cart.totalPrice;


 }
  ngOnInit(): void {
  // Retrieving user name and address and initializing the checkoutForm
    let {name,address}=this.userService.currentUser;
    this.checkoutForm=this.formBuilder.group({
      name:[name,Validators.required], // Name field with initial value and required validation
      address:[address,Validators.required] 
    });

  }
  // Getter function to easily access form controls
  get fc(){
    return this.checkoutForm.controls;
  }
  // Function to create an order
  createOrder(){

      // Validating the form
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs','Invalid Inputs');
    return;
    }
    // Checking if addressLatLng is selected

    if(!this.order.addressLatLng){
      this.toastrService.warning('Please select your location on the map','Location');
      return;
    }
  // Setting name and address from form controls to the order object
  this.order.name=this.fc.name.value;
  this.order.address=this.fc.address.value;

  // Calling the order service to create the order
  this.orderService.create(this.order).subscribe({
     next:()=>{
      // Navigating to the payment page upon successful order creation
      this.router.navigateByUrl('/payment');
     },
     error:(errorResponse)=>{
      // Displaying error message in case of failure
      this.toastrService.error(errorResponse.error,'Cart')
     }
  })
  
  }
}
