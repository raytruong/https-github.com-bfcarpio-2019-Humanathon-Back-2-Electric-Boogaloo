import { Component, OnInit } from "@angular/core";

import { Map, latLng, tileLayer, Layer, marker } from "leaflet";

declare var L: any;

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
    
    var map = L.map('map', {
      crs: L.CRS.Simple,
      maxBounds: [[-1000,-1000], [2000, 2000]],
      maxBoundsViscosity: 1.0,
    });
    var bounds = [[-26.5,-25], [1021.5,1023]];
    var image = L.imageOverlay('assets/floorplan.svg', bounds).addTo(map);
    map.fitBounds(bounds);

    this.plotPoint(120, 30, map)

    map.on("click", function(e){
      var mp = new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      alert(mp.getLatLng());
    });
    
  }

  plotPoint(lat, lng, map){

    L.marker([lat, lng]).addTo(map).on('click', function(e) {
      map.flyTo([lat, lng], 1, {
        animate: true,
        duration: 2
      })
    });

  }
}
