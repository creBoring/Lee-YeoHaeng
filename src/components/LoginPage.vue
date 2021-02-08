<template>
  <div id="app">
    <div id="map-view">
      <div id="google-map"></div>
      <div class="mist-map">
        <img src="assets/img/daum_logo.png" class="logo hc vc">
      </div>
    </div>
    <div id="side-view">
      <div class="side-box hc vc">
        <img src="assets/img/daum_logo.png" class="logo hc">
        <div class="login-box">
          <form action="index.html" method="get">
            <div class="user-info-form hc vc">
              <div class="input-form">
                <label class="input-label" for="id-input"></label>
                <input id="id-input" type="text" placeholder="ID" class="login-input"><br>
              </div>
              <div class="input-form">
                <label class="input-label" for="pw-input"></label>
                <input id="pw-input" type="password" placeholder="PW" class="login-input"><br>
              </div>
              <div class="input-form">
                <input id="login-submit" type="submit" value="Log in" class="login-input">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='@/assets/js/LoginPage.js'></script>
<style scoped src='@/assets/css/LoginPage.css'></style>
