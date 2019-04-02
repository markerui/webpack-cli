<template>
  <div id="app">
    <mk-flex>
      <item width="210px">
        <ul>
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
      </item>
      <item class="flex-grow-1">
        <router-view></router-view>
      </item>
    </mk-flex>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  padding: 15px;
}
.mkui-demo {
  border: solid #f8f9fa;
  padding: 1.5rem;
}
.mkui-code {
  background-color: #f8f9fa;
  padding: 1.5rem;
}
code {
  background-color: #f9f2f4;
  color: #c7254e;
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 90%;
}
</style>

