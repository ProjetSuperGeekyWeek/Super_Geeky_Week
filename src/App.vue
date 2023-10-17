<template>
  <div id="app">
    <span id="nav-filler"></span>
    <nav>
        <router-link to="/" class="gauche">Accueuil</router-link>
        <router-link to="/billets" class="gauche">Billets</router-link>
        <router-link to="/services" class="gauche">Services</router-link>
        <div class="authentification droite">
          <router-link to="/authentification"><img src="../src/assets/image_authentification.png" alt="authent"></router-link>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav-filler {
  display: block;
  height: 30px;
}
nav {
  background-color: rgb(112, 16, 156);
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  display: flex;
}

nav a, nav div {
  font-weight: bold;
  color: #42f316;
  text-decoration: none;
  height: 30px;
  text-align: center;
}

.gauche{
  border-right: #baee00 3px solid;
  width: 20%;
  padding-top: 15px;
}

.droite{
  margin-left: auto;
  margin-right: 0;
  width: 15%;
  text-align: right;
}

.authentification img{
  width: 45px;
  height: 45px;
  filter: drop-shadow(0px 0px 5px #baee00);
}

nav .gauche:hover {
  color: #baee00;
  background-color: #2c3e50;
  transition: 0.3s;
}

.authentification:hover {
  filter: drop-shadow(0px 0px 10px #fa3636);
}

nav a.router-link-exact-active {
  color: #42b983;
}

.authentification a.router-link-exact-active {
  filter: drop-shadow(0px 0px 10px #99e96a);
}
</style>
