<template>
  <div class="nav-bar hairline--bottom">
    <div class="van-nav-bar__left">
      <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
      <span class="van-nav-bar__text">返回</span>
    </div>
    <div class="van-nav-bar__title van-ellipsis">{{title}}</div>
    <div class="van-nav-bar__right">
      <span class="van-nav-bar__text">按钮</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "mkNavBar",
  props: {
    title: {
      type: String,
      requre: true
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    flexDirection() {}
  },
  methods: {}
};
</script>