/*
*
*   Main Page Javascript
*
*/
'use strict';

import { Loader } from "@googlemaps/js-api-loader"
//import {  }

let placeTemplate = '';

export default {
  name: 'AppPage',
  data() {
    return {
      loader: null,
      map: null,
      yeohaengList: [
        { lat: 35, lng: 139 },
        { lat: 34, lng: 150 }
      ],
      //yeohaengRoutes: []
    }
  },
  methods: {
    addListeners() {
      this.map.addListener("click", (mapsMouseEvent) => {
        this.yeohaengList.push(mapsMouseEvent.latLng.toJSON());
        console.log(mapsMouseEvent.placeId);
      })
    },
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
        this.addListeners();
      });
    },
    /*GetRoutes() {
      var vm = this;
      axios.get('https://lyh-api.creboring.com/getRoutes')
        .then(function (response) {
          console.log("Success by getting result!")
          vm.yeohaengRoutes = _.capitalize(response.data.routes);
        })
        .catch(function (error) {
          console.log("Error Occurred while getting result of routes");
        })
    }*/
  },
  beforeMount: function () {
    this.initMap();
  }
}
