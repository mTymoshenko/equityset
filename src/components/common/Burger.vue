<template>
  <div class="burger-menu" :class="{ 'is-active': isActive }">
    <button class="burger-menu__button">
      <span class="burger-menu__lines" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
};
</script>
