/*
*
*   Main Page Javascript
*
*/
'use strict';

import { Loader } from "@googlemaps/js-api-loader"

export default {
  name: 'AppPage',
  data() {
    return {
      loader: null,
      map: null
    }
  },
  methods: {
    initMap() {      // map init
      this.loader = new Loader({
        apiKey: "AIzaSyBxDQu2tvQ54YR0Y-LfIodOH_2k6IqUhyE",
        version: "weekly"
      });
      this.loader.load().then(() => {
        this.map = new google.maps.Map(document.getElementById("google-map"), {
          center: { lat: 35.6809529, lng: 139.7665669 }, //도쿄역
          zoom: 16,
          disableDefaultUI: true,
          mapId: '5b468ee5a742e3c1'
        });
      });
    }
  },
  beforeMount: function () {
    this.initMap();
  }
}
// Google map init
let map;
/*
const loader = new Loader({
  apiKey: "AIzaSyBxDQu2tvQ54YR0Y-LfIodOH_2k6IqUhyE",
  version: "weekly"
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("app-google-map"), {
    center: { lat: 35.6809529, lng: 139.7665669 }, //도쿄역
    zoom: 16,
    disableDefaultUI: true,
    mapId: '5b468ee5a742e3c1'
  });
});
*/
