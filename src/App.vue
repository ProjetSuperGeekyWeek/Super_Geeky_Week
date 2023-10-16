<template>
  <div id="app">
    <span id="nav-filler"></span>
    <nav>
      <router-link to="/">Acceuil</router-link>
      <router-link to="/billets">Billets</router-link>
      <router-link to="/services">Services</router-link>
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

nav a {
  font-weight: bold;
  color: #42f316;
  text-decoration: none;
  width: 20%;
  height: 30px;
  text-align: center;
  padding-top: 15px;
  border-right: #baee00 3px solid;
}

nav a:hover {
  color: #baee00;
  background-color: #2c3e50;
  transition: 0.3s;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
