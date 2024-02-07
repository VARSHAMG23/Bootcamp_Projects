import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm='';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    /*read data from routes  */
    activatedRoute.params.subscribe((params) => {
      /*This allows the component to react to changes in the searchTerm parameter and use it in its logic or for displaying data. */
      if(params.searchTerm)this.searchTerm=params.searchTerm;
    });
   }

  ngOnInit(): void {
   
}
search(term:string):void {

  if(term)
  this.router.navigateByUrl('/search/'+term)
}
}

