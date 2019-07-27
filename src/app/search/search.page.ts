import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // Fake API URL
  url: string = 'http://localhost:8080/locations';
  usersArray: Array<object> = [];
  nnum: number = 5;

  constructor(private http: Http) {
    this.http.get(this.url).subscribe(data => {
      // Populating usersArray with names from API
      data.json().forEach(element => {
        this.usersArray.push(element);
      });
    });
    console.log(this.usersArray)
  }

  ngOnInit() {
  }

}
