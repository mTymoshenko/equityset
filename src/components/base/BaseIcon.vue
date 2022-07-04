<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg" v-on="$listeners">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: "base-icon",

  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    iconPath() {
      if (!this.name) return "";
      let icon;
      try {
        icon = require(`@/assets/images/icons/${this.name}.svg`);
        if (Object.prototype.hasOwnProperty.call(icon, "default")) {
          icon = icon.default;
        }
      } catch (e) {
        console.error(e);
      }

      if (!icon) return "";
      return icon.url;
    },
    className() {
      return "svg-icon icon-" + this.name;
    },
  },
};
</script>
