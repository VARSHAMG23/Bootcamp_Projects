import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Declaring an array to hold food items
  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    // Declaring a variable to hold the observable of food items
    let foodObservable:Observable<Food[]>

    // Subscribing to route parameters
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)  // Checking if there's a search term parameter in the route
        foodObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);  // Getting food items by search term
      else if (params.tag)   // Checking if there's a tag parameter in the route
      foodObservable = this.foodService.getAllFoodsByTag(params.tag); // Getting food items by tag
      else
      foodObservable = foodService.getAll(); // Getting all food items if no specific parameters are provided
    foodObservable.subscribe((serverFoods)=>this.foods=serverFoods)
    })
   
    
  }

  ngOnInit(): void {
  
  }

   // Function to log food items to the console
  foods_order(){
    for(let food of this.foods){
      console.log(food);
      
    }
  }

}