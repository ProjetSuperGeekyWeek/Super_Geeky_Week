<template>
  <div id="app">
    <span id="nav-filler"></span>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
  padding: 30px;
  background-color: rgb(112, 16, 156);
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
