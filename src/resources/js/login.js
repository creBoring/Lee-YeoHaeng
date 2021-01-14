/*
*
*   Log in Page Javascript
*
*/
'use strict';

import { Loader } from "@googlemaps/js-api-loader"


// Google map init
let map;
const loader = new Loader({
  apiKey: "AIzaSyBxDQu2tvQ54YR0Y-LfIodOH_2k6IqUhyE",
  version: "weekly"
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("google-map"), {
    center: { lat: 35.6809529, lng: 139.7665669 }, //도쿄역
    zoom: 16,
    disableDefaultUI: true,
    mapId: '5b468ee5a742e3c1'
  });
});


// login Page Map 계속 위치 바꿔주기
var cityArray = [
  { lat: 35.697, lng: 139.771 },  // 아키하바라
  { lat: 35.630, lng: 139.773 },  // 오다이바 해변공원
  { lat: 35.688, lng: 139.700 },  // 신주쿠
  { lat: 35.71439990929624, lng: 139.77816281882775 },  // 우에노
  { lat: 35.658, lng: 139.744 }   // 도쿄타워
]
var n = 0;

function changeLoginPageCity() {
  map.setCenter(cityArray[n]);
  n++;
  if(n>cityArray.length - 1) {
    n = 0;
  }
}

setInterval(changeLoginPageCity, 3500);
