// Create model Food.ts
// C:\Users\VARSHA\Desktop\Dlithe_Bootcamp\foodmine\frontend\src\app\shared\models\Food.ts
//create model Food.ts and members
export class Food{
    id!: string;
    name!: string;
    price!: number;
    tags?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!: string;
    origins!:string[];
    cookTime!: string;
}