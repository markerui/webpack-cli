<template>
  <div class="hello">
    <mk-flex alignItems="center" direction="column" class="bg">
      <item>1</item>
      <item class="flex-grow-1 ov">
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
        <h1>22</h1>
      </item>
      <item width="100px" height="150px" v-on:click.native="test()">3</item>
    </mk-flex>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "Welcome to Your About App"
    };
  },
  methods: {
    test() {
      console.error(2);
    }
  }
};
</script>

<style>
.ov {
  overflow: auto;
}
.bg {
  height: 800px;
  background-color: #000;
}
.bg div {
  height: 100px;
  /* width: 100px; */
  margin: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>
