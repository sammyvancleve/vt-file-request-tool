import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

interface apiEntry {  
  bio: String;  
  email: String;  
  url: String;  
  agency: String;  
  contact: String; 
  instructions: String; 
  tags: String;    
  id: String;  
}  

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchInput = '';
  apiResults: any;


  constructor(private http: HttpClient) {
   }

  ngOnInit(
  ): void {
  }

  async onSearch(query: string) {
    var replaced = query.replace(" ", "+");
    //var temp = await this.apiQuery(replaced);
    await this.apiQuery(replaced);
  }

  apiQuery(query:string){
    const url = 'http://localhost:8080/api/main?q='
    var searchResults
    this.http.get(url + query, {responseType: 'text'}).toPromise().then((res) => {
      searchResults = res;
      var temporaryString = JSON.parse(searchResults);
      this.apiResults = temporaryString;
      console.log(this.apiResults);
      return temporaryString;
  });
  }

}
