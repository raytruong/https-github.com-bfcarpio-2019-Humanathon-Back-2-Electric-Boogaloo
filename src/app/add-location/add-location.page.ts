import { Component, OnInit } from "@angular/core";

import { Map, latLng, tileLayer, Layer, marker } from "leaflet";
import { Http } from '@angular/http';


declare var L: any;

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() { }

  //Lifecycle hooks
  toast: any;
  id;
  maps: string[] = ["Waterside_10", "demo"];
  mapPath: any = "assets/demo.svg";
  map: Map;
  image: any;
  latlong: any;
  mp: any;


  ionViewDidEnter() {
    this.loadMap();
  }
  submit(form) {
    let info = form.form.value;
    if (this.latlong != null) {
      let postObj = { label: info.label, description: info.description, phone: info.phone, map: info.map, x: this.latlong.lng, y: this.latlong.lat }
      let url = `https://west-coast-grill-1557884126307.appspot.com/locations`;
      this.http.post(url, postObj).subscribe(data => {
        let detail = data.json();
        window.location.replace("./map/" + detail._id);
      });

    }
    else {
      alert("Please tap a location and resubmit");
    }

  }
  changeMap(name: string) {
    if (this.image != null) {
      this.map.removeLayer(this.image);
    }
    this.mapPath = "assets/" + name + ".svg";
    let bounds = [[-26.5, -25], [1021.5, 1023]];
    this.image = L.imageOverlay(this.mapPath, bounds);
    this.image.addTo(this.map);
    this.map.fitBounds(bounds);
  }
  //Functions
  loadMap() {
    try {
      this.map = L.map("map", {
        crs: L.CRS.Simple,
        maxBounds: [[-1000, -1000], [2000, 2000]],
        maxBoundsViscosity: 1.0
      });
    } catch {
      window.location.reload();
    }
    this.changeMap("demo");


    let bounds = [[-26.5, -25], [1021.5, 1023]];

    this.changeMap("demo");
    this.map.on("click", e => {
      if (this.mp != null) {
        this.map.removeLayer(this.mp)
      }
      this.mp = new L.Marker([e.latlng.lat, e.latlng.lng]);
      this.mp.addTo(this.map);
      this.latlong = this.mp.getLatLng();
    });
  }
} 
