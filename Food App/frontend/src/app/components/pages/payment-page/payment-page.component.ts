import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  
  // Declaring an order variable of type Order to hold order data
  order: Order=new Order();
  constructor(router:Router,orderService: OrderService){
   // Subscribing to the order service to get a new order for the current user
    orderService.getNewOrderForCurrentUser().subscribe({
      next:(order)=>{

        // Assigning the received order data to the component's order variable
        this.order = order;
      },
      error:()=>{
           router.navigateByUrl('/checkout');
      }
    })

  }
  
  ngOnInit(): void {
    
  } 


}
