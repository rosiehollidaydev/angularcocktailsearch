import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cocktails: [] = [];
  constructor(private apiService : ApiService) {  }

  ngOnInit() {
    this.get();    
  }

  get(){
    this.cocktails = [];
    this.apiService.get().subscribe((data)=>{  
      console.log(data.drinks);  
      this.cocktails = data.drinks; 
  })
  }

  searchData(){
    console.log("here I am");
    var inputValue = (<HTMLInputElement>document.getElementById("search")).value;
    this.apiService.search(inputValue).subscribe((data)=>{  
      if(data.drinks !== null)
      {
        this.cocktails = data.drinks; 
      }
      else
      {
        this.cocktails = null;
      }
      console.log(this.cocktails);
  })
  }
  
}
