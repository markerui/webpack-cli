<template>
  <div class="mk-flex" :class="[flexDirection , flexWrap ,flexJustify,flexAlignItems]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "mkFlex",
  props: {
    direction: {
      type: String
    },
    wrap: {
      type: String
    },
    justify: {
      type: String
    },
    alignItems: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    flexDirection() {
      switch (this.direction) {
        case "row":
          return "flex-direction-row";
          break;
        case "row-reverse":
          return "flex-direction-row-reverse";
          break;
        case "column":
          return "flex-direction-column";
          break;
        case "column-reverse":
          return "flex-direction-column-reverse";
          break;
        default:
          return "";
      }
    },
    flexWrap() {
      switch (this.wrap) {
        case "nowrap":
          return "flex-wrap-nowrap";
          break;
        case "wrap":
          return "flex-wrap-wrap";
          break;
        case "wrap-reverse":
          return "flex-wrap-wrap-reverse";
          break;
        default:
          return "";
      }
    },
    flexJustify() {
      switch (this.justify) {
        case "start":
          return "justify-content-start";
          break;
        case "end":
          return "justify-content-end";
          break;
        case "center":
          return "justify-content-center";
          break;
        case "between":
          return "justify-content-space-between";
          break;
        case "around":
          return "justify-content-space-around";
          break;
        default:
          return "";
      }
    },
    flexAlignItems() {
      switch (this.alignItems) {
        case "start":
          return "align-items-start";
          break;
        case "end":
          return "align-items-end";
          break;
        case "center":
          return "align-items-center";
          break;
        case "baseline":
          return "align-items-baseline";
          break;
        case "stretch":
          return "align-items-stretch";
          break;
        default:
          return "";
      }
    }
  },
  methods: {}
};
</script>
