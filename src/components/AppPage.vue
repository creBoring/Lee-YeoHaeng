<template>
  <div id="app">
    <div id="map-view">
      <div id="google-map"></div>
    </div>
    <div id="side-view">
      <div class="header">
        <img src="assets/img/daum_logo.png" class="logo hc vc">
      </div>
      <div class="article">
        <button v-on:click="getRoutes" id="submit-selected-places" class="hc">계산하기</button>
        <ul class="selected-places">
          <li v-for="(place, index) in yeohaengList">
            {{ index+1 }} - {{ place }}
          </li>
        </ul>
      </div>
      <div class="footer">
        푸터푸터
      </div>
    </div>
  </div>
</template>

<script src='@/assets/js/AppPage.js'></script>
<style src='@/assets/css/AppPage.css'></style>
