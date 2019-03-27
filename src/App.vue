<template>
  <div id="app">
    <h1>
      <img src="./assets/logo.png">
    </h1>
    <p>
      <router-link to="/">Go to Index</router-link>
      <router-link to="/form">Go to About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>

