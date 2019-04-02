<template>
  <div :style="{flexBasis:width,height:height}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "mkItem",
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
