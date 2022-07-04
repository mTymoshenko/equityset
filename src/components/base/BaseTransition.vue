<template>
  <transition :name="transitionName" v-bind="$attrs">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "base-transiton",

  inheritAttrs: false,

  props: {
    transitionName: {
      type: String,
      default: "fade",
    },
  },
};
</script>
