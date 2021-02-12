/*
*
*   Log in Page Javascript
*
*/
'use strict';

import { Loader } from "@googlemaps/js-api-loader"

export default {
  name: 'LoginPage',
  data() {
    return {
      loader: null,   // map Loader
      map: null,      // map object
      cityArray: [    // map list
        { lat: 35.697, lng: 139.771 },  // 아키하바라
        { lat: 35.630, lng: 139.773 },  // 오다이바 해변공원
        { lat: 35.688, lng: 139.700 },  // 신주쿠
        { lat: 35.71439990929624, lng: 139.77816281882775 },  // 우에노
        { lat: 35.658, lng: 139.744 }   // 도쿄타워
      ],
      cityCount: 0,    // map current count
      mapChanged: null,
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
    },
    changeLoginPageCity() { // change map location
      this.map.setCenter(this.cityArray[this.cityCount++]);
      if(this.cityCount > this.cityArray.length - 1) {
        this.cityCount = 0;
      }
    }
  },
  beforeMount: function () {
    this.initMap();
    this.mapChanged = setInterval(this.changeLoginPageCity, 3500);
  },
  destroyed: function () {
    clearInterval(this.mapChanged);
  }
}
