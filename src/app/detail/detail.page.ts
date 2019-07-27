import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id;
  detail: any = { "label": "hi", "description": "hi", "phone": "hi", "map": "hi" };
  constructor(private http: Http, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    let url = `https://west-coast-grill-1557884126307.appspot.com/locations/${this.id}`;
    this.http.get(url).subscribe(data => {
      this.detail = data.json();
    });
  }
  delete() {
    if (confirm("Are you sure?")) {
      let url = `https://west-coast-grill-1557884126307.appspot.com/locations/${this.id}`;
      this.http.delete(url).subscribe(data => {
        window.location.replace("./search")
      });
    }
  }

}
