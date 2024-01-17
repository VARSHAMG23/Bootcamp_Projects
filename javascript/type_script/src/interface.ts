// Interface to Interface
// interface Shape {
//     color: string;
//   }
  
//   interface Square extends Shape {
//     Length: number;
//   }
  
//   const mySquare: Square = {
//     color: 'blue',
//     Length: 10,
//   };
  
//   console.log(`Color: ${mySquare.color}, Length: ${mySquare.Length}`);
  

//Class to Interface


// interface Shape {
//     color: string;
//     getArea(): number;
//   }
  
 
//   class Square implements Shape {
//     color: string;
//     Length: number;
  
//     constructor(color: string, Length: number) {
//       this.color = color;
//       this.Length = Length;
//     }
  
//     getArea(): number {
//       return this.Length * this.Length;
//     }
//   }
  
//   const mySquare = new Square('blue', 5);
 
//   console.log(`Color: ${mySquare.color}`);
//   console.log(`Area: ${mySquare.getArea()}`);
  


interface Shape {
    color: string;
  }
  
  interface Dimensions {
    width: number;
    height: number;
  }
  
  // Implement multiple interfaces in a single class
  class Rectangle implements Shape, Dimensions {
    color: string;
    width: number;
    height: number;
  
    constructor(color: string, width: number, height: number) {
      this.color = color;
      this.width = width;
      this.height = height;
    }
  }
  

  const myRectangle = new Rectangle('red', 10, 5);
  
  console.log(`Color: ${myRectangle.color}`);
  console.log(`Width: ${myRectangle.width}`);
  console.log(`Height: ${myRectangle.height}`);
  