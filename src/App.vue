<template>
  <div id="app">
    <mk-navbar title="网站标题"></mk-navbar>
    <mk-flex class="container">
      <mk-item width="210px">
        <ul>
          <li>
            <router-link to="/init">Init</router-link>
          </li>
          <li>
            <router-link to="/start">Start</router-link>
          </li>
          <li>
            <router-link to="/flex">Flex</router-link>
          </li>
          <li>
            <router-link to="/form">Form</router-link>
          </li>
          <li>
            <router-link to="/iconfont">Iconfont</router-link>
          </li>
          <li>
            <router-link to="/navbar">Navbar</router-link>
          </li>
        </ul>
      </mk-item>
      <mk-item class="flex-grow-1" width="0">
        <router-view></router-view>
      </mk-item>
    </mk-flex>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>

