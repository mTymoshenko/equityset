<template>
  <div v-if="show">
    <div class="backdrop" v-on="$listeners"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
