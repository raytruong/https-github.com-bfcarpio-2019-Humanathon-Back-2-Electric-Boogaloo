import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  // Fake API URL
  url: string = 'https://west-coast-grill-1557884126307.appspot.com/locations';
  usersArray: Array<object> = [];
  nnum: number = 5;
  searchText: string;
  constructor(private http: Http) {
    this.http.get(this.url).subscribe(data => {
      // Populating usersArray with names from API
      data.json().forEach(element => {
        this.usersArray.push(element);
      });
    });
    console.log(this.usersArray);
  }

  ngOnInit() { }
}
