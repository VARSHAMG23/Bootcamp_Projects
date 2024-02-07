import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Food;
  //to read food items from  route params
  constructor(private router:Router, private cartService:CartService,   activatedRoute:ActivatedRoute,foodService:FoodService) { 

    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      foodService.getFoodById(params.id).subscribe(serverFood=>{
    this.food = serverFood;
  });
    })

    console.log(new Food());
    
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
