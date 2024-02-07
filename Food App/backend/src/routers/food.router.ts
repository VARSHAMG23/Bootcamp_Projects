
// line imports the 'Router' class from the 'express' library.
// The Router class is used to create modular, mountable route handlers for a web server.
// It allows for defining routes and their corresponding HTTP methods (GET, POST, etc.) within an Express application.

import {Router} from 'express';
import { sample_foods, sample_tags } from '../data';

// line imports the 'asyncHandler' middleware from the 'express-async-handler' package.
// The 'asyncHandler' middleware is used to handle asynchronous errors in route handlers without the need for explicit try-catch blocks.

import asyncHandler from 'express-async-handler';

// The 'FoodModel' is likely a Mongoose model representing food items in the database.
import { FoodModel } from '../models/food.model';

const router=Router();

// block defines a GET route handler for the '/seed' endpoint using the 'router.get()' method.
// The 'asyncHandler' middleware is used to handle asynchronous errors in the route handler.
// Within the handler function, it checks if there are existing food documents in the database.
// If no food documents exist, it creates new documents based on the 'sample_foods' array.
// Finally, it sends a response indicating the completion of the seeding process.

router.get('/seed', asyncHandler(
    async (req, res) => {
    const foodsCount=await FoodModel.countDocuments();
    if (foodsCount>0){
        res.send("Seed is already done")
        return;
    }
    await FoodModel.create(sample_foods);
    res.send("Seed is Done!");
    }
))

// block defines a GET route handler for the '/' endpoint using the 'router.get()' method.
// Within the handler function, it queries the database using the 'FoodModel.find()' method to retrieve all food items.
// Finally, it sends the retrieved food items as a response.


router.get('/',asyncHandler(async (req, res) => {
    const foods=await FoodModel.find();

    res.send(foods);

}))

// It then queries the database using the 'FoodModel.find()' method to find food items whose name matches the search term.
// Finally, it sends the matching food items as a response.

router.get('/search/:searchTerm',asyncHandler(async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    // const searchTerm=req.params.searchTerm;
    // const foods=sample_foods
    // .filter(food =>food.name.toLowerCase().
    // includes(searchTerm.toLowerCase()));
    const foods=await FoodModel.find({name:{$regex:searchRegex}})
    res.send(foods);
}))

// Within the handler function, it performs an aggregation operation on the 'FoodModel' collection to get unique tags and their counts.
// It then constructs an array of tag objects containing name and count properties, sorted by count in descending order.

router.get('/tags',asyncHandler(async(req, res) => {
    
    const tags=await FoodModel.aggregate([{
        $unwind:'$tags'
    },
{
    $group:{
        _id:'$tags',
        count:{$sum:1}
    }
},
{

    $project:{
        _id:0,
        name:'$_id',
        count:'$count'
    }
}

]).sort({count:-1});
const all={
    name:'All',
    count:await FoodModel.countDocuments()
}
    tags.unshift(all);
    res.send(tags)
}))

router.get('/tag/:tagName', asyncHandler(async(req, res) => {
    // const tagName = req.params.tagName;
    // const foods=sample_foods
    // .filter(food =>food.tags?.includes(tagName))
   const foods=await FoodModel.find({tags: req.params.tagName})
   
    res.send(foods)
}))

router.get('/:foodId',asyncHandler( async(req, res) => {
//  const foodId =req.params.foodId;
//  const food = sample_foods.find(food=>food.id==foodId);
const foods=await FoodModel.findById(req.params.foodId);
 res.send(foods);
}))


export default router;

