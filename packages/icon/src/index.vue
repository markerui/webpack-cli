<template>
  <i class="iconfont" :class="[typeComputed,color]">
    <slot></slot>
  </i>
</template>
<script>
export default {
  name: "mkIcon",
  props: {
    type: {
      type: String
    },
    color: {
      type: String
    }
  },
  computed: {
    typeComputed() {
      return "icon-icon_" + this.type;
    }
  },
  data() {
    return {};
  }
};
</script>


