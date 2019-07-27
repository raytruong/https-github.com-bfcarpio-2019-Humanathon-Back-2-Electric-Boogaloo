import { Component, OnInit } from "@angular/core";

import { Map, latLng, tileLayer, Layer, marker } from "leaflet";


declare var L: any;

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  //Lifecycle hooks
  map: Map;
  lat: number = 5;
  lng: number = 5;

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    let map;
    try {
      map = L.map("map", {
        crs: L.CRS.Simple,
        maxBounds: [[-1000, -1000], [2000, 2000]],
        maxBoundsViscosity: 1.0
      });
    }
    catch{ window.location.reload(); }
    var bounds = [[-26.5, -25], [1021.5, 1023]];
    var image = L.imageOverlay('assets/floorplan.svg', bounds).addTo(map);
    map.fitBounds(bounds);

    this.plotPoint(120, 30, map)

    map.on("click", function (e) {
      var mp = new L.Marker([e.latlng.lat, e.latlng.lng])
      alert(mp.getLatLng());
    });

  }

  plotPoint(lat, lng, map) {

    L.marker([lat, lng]).addTo(map).on('click', function (e) {
      map.flyTo([lat, lng], 1, {
        animate: true,
        duration: 2
      })
    });

  }

}
