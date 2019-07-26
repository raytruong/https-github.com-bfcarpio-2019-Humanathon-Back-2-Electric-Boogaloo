import { Component, OnInit } from "@angular/core";

import { Map, latLng, tileLayer, Layer, marker } from "leaflet";

@Component({
  selector: "app-map",
  templateUrl: "map.page.html",
  styleUrls: ["map.page.scss"]
})
export class MapPage implements OnInit {
  private selectedItem: any;
  private icons = [
    "flask",
    "wifi",
    "beer",
    "football",
    "basketball",
    "paper-plane",
    "american-football",
    "boat",
    "bluetooth",
    "build"
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: "Item " + i,
        note: "This is item #" + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {}

  //Lifecycle hooks
  map: Map;
  lat: number = 5;
  lng: number = 5;

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    this.map = new Map("map").setView([this.lat, this.lng], 8);

    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/map', JSON.stringify(item)]);
  // }
}
