<template>
  <div class="hello">
    <mk-flex alignItems="baseline" class="bg">
      <div>1</div>
      <div>2</div>
      <div>3</div>
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
  }
};
</script>

<style>
.bg {
  height: 500px;
  background-color: #000;
}
.bg div {
  height: 100px;
  width: 100px;
  margin: 10px;
  background-color: #f1f1f1;
}
</style>
