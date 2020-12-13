import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Drink } from '../drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cocktails: Drink[] = [];
  isLoading: boolean = true;

  constructor(private apiService : ApiService) {  }

  ngOnInit() {
    this.get();    
  }

  get(){
    this.isLoading = true;
    this.cocktails = [];
    this.apiService.get().subscribe((data)=>{  
      console.log(data.drinks);  
      this.cocktails = data.drinks; 
      this.isLoading = false;

  })
  }

  searchData(){
    this.cocktails = [];
    this.isLoading = true;
    var inputValue = (<HTMLInputElement>document.getElementById("search")).value;
    this.apiService.search(inputValue).subscribe((data)=>{  
      if(data.drinks !== null)
      {
        this.cocktails = data.drinks; 
      }
      this.isLoading = false;
  })
  }
  
}
