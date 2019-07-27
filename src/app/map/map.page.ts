import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";
import { ToastController } from "@ionic/angular";
import { Map, latLng, tileLayer, Layer, marker } from "leaflet";
import { toastController } from "@ionic/core";

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
  maps: string[] = ["Waterside_10", "demo"];
  mapPath: any = "assets/demo.svg";
  map: Map;
  image: any;
  constructor(
    public toastController: ToastController,
    private route: ActivatedRoute,
    private http: Http
  ) {}

  //Lifecycle hooks
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id"); //bind marker param
    //console.log(this.id);
  }

  ionViewDidEnter() {
    this.loadMap();
  }
  changeMap(name: string) {
    toastController.dismiss();
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

    let url = `http://localhost:8080/locations/${this.id}`;
    this.http.get(url).subscribe(data => {
      if (!data) {
        return;
      }

      //Populate data
      let res = data.json();

      //API get id marker info
      let label = res.label;
      let desc = res.description;
      let phone = res.phone;
      let path = res.map;
      let lat = res.y;
      let lng = res.x;
      let bounds = [[-26.5, -25], [1021.5, 1023]];

      this.changeMap(path);

      if (label && desc && phone && this.mapPath && lat && lng) {
        //Begin plotting marker
        this.plotPoint(this.map, lat, lng, label, desc, phone);

        //Fly to marker and show info
        this.map.flyTo([lat, lng], 1, {});
        this.showMarkerInfo(label, desc, phone);

        /*
      This snippet tells you where you tapped on the map when tapped
      map.on("click", e => {
        let mp = new L.Marker([e.latlng.lat, e.latlng.lng]);
        alert(mp.getLatLng());
      });
      */
      }
    });
  }

  async showMarkerInfo(label, desc, phone) {
    const toast = await this.toastController.create({
      header: `${label}`,
      message: `${desc}\n${phone}`,
      closeButtonText: "x",
      showCloseButton: false,
      mode: "ios"
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
