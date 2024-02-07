import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/models/constants/urls';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  /*get all foods from data.ts,we can get the data from backend, returns food array */
  
  getAll():Observable<Food[]>{
    //return sample_foods
    return this.http.get<Food[]>(FOODS_URL);
  }
/* Returns food based on searchterm */

  getAllFoodBySearchTerm(searchTerm:string){
    /*this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.tolowerCase())) The entire condition checks if the name of each food item includes the provided search term (case-insensitive).*/
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag:string):Observable<Food[]>{
    return tag =="All" ?
    this.getAll():
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId:string):Observable<Food>{
    //return this.getAll().find(food=>food.id==foodId)??new Food();
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }

}
