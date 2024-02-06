// line imports the 'Schema' and 'model' functions from the 'mongoose' library.
// These functions are essential for defining database schemas and creating models based on those schemas for MongoDB.

import { Schema, model } from "mongoose";

export interface Food{

//structure of a food item
// Each property within the interface corresponds to a field in the MongoDB document.
    
    id: string;
    name: string;
    price: number;
    tags:string[];
    favorite:boolean;
    stars:number;
    imageUrl: string;
    origins:string[];
    cookTime: string;

}
// line defines a new Mongoose schema named 'FoodSchema' based on the 'Food' interface.
// The schema specifies the structure and data types of each field in a MongoDB document for food items.

export const FoodSchema=new Schema<Food>(
    {
        
            name: {type: String, required:true},
            price: {type: Number, required:true},
            tags: {type: [String]},
            favorite: {type: Boolean, default:false},
            stars: {type: Number, required:true},
            imageUrl: {type: String, required:true},
            origins: {type: [String], required:true},
            cookTime: {type: String, required:true}
        
    },{
// The 'toJSON' and 'toObject' options enable virtuals to be included when converting the schema to JSON or a plain JavaScript object.
// Virtuals are additional fields that are not stored directly in the database but computed based on other fields.
// The 'timestamps' option automatically adds 'createdAt' and 'updatedAt' fields to each document, tracking creation and update times.
        toJSON:{
            virtuals: true
        },

        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);
export const FoodModel = model<Food>('food', FoodSchema);
// The model allows interacting with the 'foods' collection in the MongoDB database.
// It provides methods for performing CRUD (Create, Read, Update, Delete) operations on food items
// The first argument specifies the name of the collection ('food'), and the second argument is the schema used for validating documents.