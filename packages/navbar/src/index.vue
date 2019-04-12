<template>
  <div
    class="mk-flex mk-navbar align-items-center align-content-center justify-content-space-between block"
  >
    <div class="navbar-left mk-flex" v-if="isLeft">
      <div class="item" v-on:click="leftSendEvent" v-if="!isLeftSlot">
        <i class="iconfont" :class="leftIconComputed"></i>
        <span v-html="leftText"></span>
      </div>
      <slot name="left" v-else></slot>
    </div>
    <div class="navbar-title text-center block">
      <h1 v-html="title"></h1>
    </div>
    <div class="navbar-right mk-flex">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "mkNavbar",
  props: {
    title: {
      type: String
    },
    isLeft: {
      type: Boolean,
      default: true
    },
    leftText: {
      type: String,
      default: "返回"
    },
    leftIcon: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {};
  },
  computed: {
    leftIconComputed() {
      return "icon-icon_" + this.leftIcon;
    },
    isLeftSlot() {
      return this.$slots.left;
    }
  },
  methods: {
    leftSendEvent() {
      this.$emit("left_event");
    }
  }
};
</script>
