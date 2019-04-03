<template>
  <div :style="{flexBasis:flexWidth,height:height,width:width}">
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
    flexWidth: {
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
