<template>
  <div class="mk-flex mk-navbar block">
    <div class="left">返回</div>
    <div class="flex-grow-1 block text-center">
      <h1 class="navbar-title" v-html="title"></h1>
    </div>
    <div class="right">操作</div>
  </div>
</template>
<script>
export default {
  name: "mkNavbar",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
