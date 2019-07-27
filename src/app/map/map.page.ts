import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Map, latLng, tileLayer, Layer, marker } from "leaflet";

declare var L: any;

@Component({
  selector: "app-map",
  templateUrl: "map.page.html",
  styleUrls: ["map.page.scss"]
})
export class MapPage implements OnInit {
  //Services
  toast: any;
  id;
  constructor(
    public toastController: ToastController,
    private route: ActivatedRoute
  ) {}

  //Lifecycle hooks
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id"); //bind marker param
    console.log(this.id);
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  //Functions
  loadMap() {
    //API get id marker info
    let label = "Raymond Truong";
    let desc = "Intern General 2";
    let phone = "123-456-7890";
    let mapPath = "assets/floorplan.svg";
    let lat = 0;
    let lng = 0;
    let bounds = [[-26.5, -25], [1021.5, 1023]];

    let map = L.map("map", {
      crs: L.CRS.Simple,
      maxBounds: [[-1000, -1000], [2000, 2000]],
      maxBoundsViscosity: 1.0
    });

    L.imageOverlay(mapPath, bounds).addTo(map);
    map.fitBounds(bounds);

    if (label && desc && phone && mapPath && lat && lng) {
      //Begin plotting marker
      this.plotPoint(map, lat, lng, label, desc, phone);

      //Fly to marker and show info
      map.flyTo([lat, lng], 1, {});
      this.showMarkerInfo(label, desc, phone);

      /*
      This snippet tells you where you tapped on the map when tapped
      map.on("click", e => {
        let mp = new L.Marker([e.latlng.lat, e.latlng.lng]);
        alert(mp.getLatLng());
      });
      */
    }
  }

  async showMarkerInfo(label, desc, phone) {
    const toast = await this.toastController.create({
      message: `${label} | ${desc} | ${phone}`,
      duration: 5000
    });
    await toast.present();
  }

  plotPoint(map, lat, lng, label, desc, phone) {
    L.marker([lat, lng])
      .addTo(map)
      .on("click", () => {
        map.flyTo([lat, lng], 1, {});
        this.showMarkerInfo(label, desc, phone);
      });
  }
}
