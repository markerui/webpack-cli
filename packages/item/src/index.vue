<template>
  <div :style="{flexBasis:width,height:height}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "item",
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
