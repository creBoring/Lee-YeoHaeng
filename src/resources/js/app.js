/*
*
*   Main Javascript
*
*/

'use strict';

import { Loader } from "@googlemaps/js-api-loader"

let map;
const loader = new Loader({
  apiKey: "AIzaSyBxDQu2tvQ54YR0Y-LfIodOH_2k6IqUhyE",
  version: "weekly"
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("google-map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

console.log("test");
