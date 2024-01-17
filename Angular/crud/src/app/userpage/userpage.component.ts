// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
// import { DataService } from '../services/data.service';
// @Component({
//   selector: 'app-userpage',
//   templateUrl: './userpage.component.html',
//   styleUrls: ['./userpage.component.css']
// })

// export class UserpageComponent implements OnInit {

//   assign='';
//   myUrl="http://localhost:3000/details"
//   //http://localhost:3000/details?email=varshamgvviet@gmail.com
//   userDetails:any={};
//   myObject:any={

//     email:"",
//     list:[]
//   }
//   constructor(private router:Router,private dataService:DataService) { }

//   ngOnInit(): void {
//     let email=this.dataService.receivedDetails();
//     this.dataService.getData(`${this.myUrl}?email=${email}`).subscribe(response => {
//       this.userDetails=response;
//       console.log(`${this.myUrl}?email=${email}`)
//       console.log(this.userDetails);
//       console.log(this.userDetails[0].email);
//       console.log(this.userDetails[0].list);
//       console.log("previous was user data")
//       console.log(this.dataService.receivedDetails())
//   })
//   }
//   onClick(){
//     // console.log(this.assign)

//     this.userDetails[0].list.push(this.assign)
//     this.myObject.email = this.userDetails[0].email;
//     this.myObject.list = this.userDetails[0].list;
//     //Update Data
//     this.dataService.putData(this.myUrl,this.myObject).subscribe();
//     // console.log(this.userDetails[0])
//     console.log(this.myObject);
    

//   }

  

// }
// ###########################################################

// import { Component, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
// import { DataService } from '../services/data.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-userpage',
//   templateUrl: './userpage.component.html',
//   styleUrls: ['./userpage.component.css']
// })
// export class UserpageComponent implements OnInit {

//   assign='';
//   updatingItem='';

//   myObject:any={
//     email:"",
//     list:[]
//   };
//   id:any;
//   email:any;
//   display=false
//   displayIndex:any;
//   userId:any;

//   myUrl='http://localhost:3000/users';
//   myUserUrl="http://localhost:3000/details"
//   // http://localhost:3000/users?email=bshridhar27@gmail.com
  
//   userDetails:any={};

//   constructor(private dataService:DataService, private router:Router ) { }


//   ngOnInit(): void {
//     var dataReceived = this.dataService.receivedDetails();
//     this.email=dataReceived[0]
//     this.userId=dataReceived[1]
//     this.email=this.dataService.receivedDetails();
   
//     this.dataService.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=>{
//       this.userDetails=response;
    
      
//   })
  
//   }

//   onClick(){
//     this.userDetails[0].list.push(this.assign);
//     this.assign="";
//     this.myObject.email=this.userDetails[0].email;
//     this.myObject.list=this.userDetails[0].list;
//     this.id=this.userDetails[0].id
//     // this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
//     this.dataService.putData(this.myUrl,this.myObject).subscribe();
//     this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
//       () => {
//         console.log('Data deleted successfully.');
//         this.loading()
//       }
//     );
// }
//   loading(){
//     this.email=this.dataService.receivedDetails();
//     this.dataService.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=>{
//       this.userDetails=response;    
//   })
//   }

// //Deleting data 

// deleteItem(index: number){
// this.userDetails[0].list.splice(index, 1);
// this.myObject.email=this.userDetails[0].email;
// this.myObject.list=this.userDetails[0].list;
// this.id=this.userDetails[0].id
// this.dataService.putData(this.myUrl,this.myObject).subscribe();
// this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
//   () => {
//     alert("Item Deleted successfully")
//     console.log('Data deleted successfully.');
//     this.loading()
  
//   })

// }
// //For Display

// updateDisplay(index: number,details:string){
//   this.display=true
//   this.displayIndex=index
//   this.updatingItem=details

// }
// //For Updating Item

// updateItem(){
//   console.log(this.updatingItem);
//   this.userDetails[0].list.splice(this.displayIndex,1,this.updatingItem)
//   this.myObject.email=this.userDetails[0].email;
//   this.myObject.list=this.userDetails[0].list.slice();
//   this.id=this.userDetails[0].id
//   this.dataService.putData(this.myUrl,this.myObject).subscribe();
  
//   this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
//     () => {
//       alert("Item Deleted successfully")
//       console.log('Data deleted successfully.');
//       this.loading()
    
//     });
//     this.display=false
// }

// deleteAccount(){
//   this.id=this.userDetails[0].id
//   console.log(`${this.myUrl}/${this.id}`);
//   this.dataService.deleteContent(`${this.myUserUrl}/${this.userId}`).subscribe(
//     () => {
//       console.log('Data deleted successfully');
//       console.log(this.userId)
//       console.log(`${this.myUrl}/${this.userId}`)

//     });
//     console.log(`${this.myUrl}/${this.userId}`);
//     this.dataService.deleteContent(`${this.myUrl}/${this.userId}`).subscribe(
//       () => {
//         console.log('user deleted successfully');
//       }
//     );
//     this.router.navigateByUrl('.signup')
// }
// }

// Import required components and services from Angular

import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

// Decorator to define the component metadata

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
// Declare component properties

  assign=''; // Variable to store input value
  updatingItem='';   // Variable to store value for updating an item
  myObject:any={      // Object to store email and list
    email:"",
    list:[]
  };
  id:any;     // Variable to store user ID
  email:any;  // Variable to store user email
  userId:any;  // Variable to store user ID
  display = false; // Flag to control the display of an element
  displayIndex: any; // Variable to store the index for display

  // Define URLs for API endpoints 

  myUrl='http://localhost:3000/details';
  myUserUrl='http://localhost:3000/users'
  
  // User details property to store fetched data

  userDetails:any={};

  // Constructor to inject DataService and Router
  constructor(private dataService:DataService ,private router:Router) { }

  
 // Lifecycle hook - ngOnInit is called after the component is initialized

  ngOnInit(): void {
    // Call the receivedDetails method from the DataService to get data
    var dataReceived=this.dataService.receivedDetails();
     // Extract the email and userId from the received data
    this.email=dataReceived[0]
    this.userId=dataReceived[1]
    // Make an HTTP GET request to fetch user details using the email
    this.dataService.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=>{
    // Assign the response (user details) to the userDetails property
    this.userDetails=response;

      
  })
  
  }


  onClick(){
    // Check if 'assign' has a truthy value
    if(this.assign){
    // Add the value of 'assign' to the 'list' property of the first element in 'userDetails'
    this.userDetails[0].list.push(this.assign);
    this.assign="";
    // Update 'myObject' properties with email and updated list
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list;

    // Store the 'id' property of the first element in 'userDetails' in 'id'
    this.id=this.userDetails[0].id

    // Update data using putData and delete previous record
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();

    // Use deleteContent to delete data at a specific URL (based on 'id') 
    this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
    console.log('Data deleted successfully.');

    // Call the loading() method to refresh user details
    this.loading()

    // this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe
    // Use deleteContent to delete data based on email and a specific value ('six') in 'list'
    this.dataService.deleteContent(`${this.myUrl}?email=${this.userDetails[0].email}&list=six`).subscribe(() =>{
    console.log("deleted item");
          
        })
      }
    );
    }
    
}
    /*The purpose of this loading method is to fetch and load user details based on the email obtained from the receivedDetails method.
    It uses the getData method from the DataService to make an asynchronous HTTP request, and once the response is received, it assigns the user details to the userDetails property for further use in the component. */

  loading(){
    // Call the receivedDetails method from the DataService to get data
    var dataReceived=this.dataService.receivedDetails();
    
    // Extract the email and userId from the received data
    this.email=dataReceived[0]
    this.userId=dataReceived[1]
    console.log("this is my emial man");
    
    this.dataService.getData(`${this.myUrl}?email=${this.email}`).subscribe((response)=>{
      this.userDetails=response;    
  })
  }
  /* this.userDetails[0].list.splice(index, 1);: Removes the item at the specified index from the 'list' property of the first element in   'userDetails'. This effectively deletes the item from the list.

this.myObject.list = this.userDetails[0].list.slice();: Updates the 'list' property of 'myObject' with a shallow copy of the updated list from the first element in 'userDetails'. This ensures that 'myObject' has the latest list without directly referencing the 'userDetails' list.

this.loading();: Calls the 'loading()' method to refresh user details after updating and deleting. */

  deleteItem(index:number){
    this.userDetails[0].list.splice(index,1)
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list.slice();
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
        this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
        this.loading()
        
        

      }
    );
    
  }
  /* this.display = true;: Sets the 'display' property to true, indicating that an update form or dialog should be shown.

     this.displayIndex = index;: Stores the index of the item being updated in the 'displayIndex' property.

     this.updatingItem = details;: Stores the details of the item being updated in the 'updatingItem' property.*/
  
     updateDisplay(index:number,details:string){
    this.display=true
    this.displayIndex=index
    this.updatingItem=details

    
  }

  updateItem(){
    console.log(this.updatingItem);
   // Replace the item at 'displayIndex' with the updated details in the 'list' property of the first element in 'userDetails'
    this.userDetails[0].list.splice(this.displayIndex,1,this.updatingItem)
    this.myObject.email=this.userDetails[0].email;
    this.myObject.list=this.userDetails[0].list.slice();
    this.id=this.userDetails[0].id
    this.dataService.putData(`${this.myUrl}?email=${this.userDetails[0].email}`,this.myObject).subscribe();
        this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        console.log('Data deleted successfully.');
         // Call the loading() method to refresh user details
        this.loading()
      }
    );
    this.display=false
    
    
  }
  /* deleteAccount method is to delete both the user's data and the user's account. It first deletes the data associated with the user (using the 'id'), then deletes the user account data (using 'userId'), and finally navigates to the 'signup' route.
*/
  deleteAccount(){
    this.id=this.userDetails[0].id
    console.log(`${this.myUrl}/${this.id}`);
    this.dataService.deleteContent(`${this.myUrl}/${this.id}`).subscribe(
      () => {
        alert('Account deleted successfully.');
        console.log('Data deleted successfully.');
        // console.log(this.userId);
        // console.log(`${this.myUrl}/${this.userId}`);
      }
    );
    console.log(`${this.myUserUrl}/${this.userId}`);
    this.dataService.deleteContent(`${this.myUserUrl}/${this.userId}`).subscribe(
      () => {
        console.log('user deleted successfully.');
      }
    );
    this.router.navigateByUrl('signup')
  }
  

}