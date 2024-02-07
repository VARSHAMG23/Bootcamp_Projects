// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { OrderService } from 'src/app/services/order.service';
// import { Order } from 'src/app/shared/models/Order';

// @Component({
//   selector: 'app-order-track-page',
//   templateUrl: './order-track-page.component.html',
//   styleUrls: ['./order-track-page.component.css']
// })
// export class OrderTrackPageComponent implements OnInit {
  
//   order!:Order;

//   constructor(activatedRoute: ActivatedRoute,orderService: OrderService){
//     const params=activatedRoute.snapshot.params;
//     if(!params.orderId) return;

//     orderService.trackOrderById(params.orderId).subscribe(order=>{
//       this.order = order;
//     })
//   }
  
//   ngOnInit(): void {
    
//   }
// }
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css']
})
export class OrderTrackPageComponent {

  // Declaring an order variable of type Order to hold order data

  order!:Order
  constructor(activatedRoute:ActivatedRoute,
    orderService:OrderService){
      // Retrieving route parameters
      const params=activatedRoute.snapshot.params
      // Checking if orderId parameter exists in the route
      if(!params.orderId) return
       // Subscribing to the order service to track the order by its ID
      orderService.trackOrderById(params.orderId).subscribe(order=>{
         // Assigning the received order data to the component's order variable
      this.order=order
      })
    }
}