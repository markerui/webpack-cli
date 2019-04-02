<template>
  <div id="app">
    <mk-flex class="container">
      <mk-item width="210px" style="flex-grow: 1;">
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
        </ul>
      </mk-item>
      <mk-item class="flex-grow-1">
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

