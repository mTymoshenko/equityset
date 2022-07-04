<template>
  <div
    class="dropdown"
    :tabindex="tabindex"
    @blur="handleHide"
    :class="{ 'is-select': isSelect }"
  >
    <div
      class="dropdown__header flex justify-between flex-align-center"
      :class="{
        'is-show': isShow,
        'input is-select': isSelect,
      }"
      @click="handleToggle"
    >
      <slot name="selection" :isShow="isShow" />
      <slot v-if="hasArrow" :isShow="isShow" name="arrow">
        <span
          class="triangle triangle--bottom"
          :class="[triangleClass, { 'is-active': isShow }]"
        />
      </slot>
    </div>
    <BaseTransition>
      <div
        v-if="isShow"
        class="dropdown__body"
        :class="{ 'is-full-width': isFullWidth }"
      >
        <slot name="body" :handleHide="handleHide" />
      </div>
    </BaseTransition>
  </div>
</template>
<script>
export default {
  name: "dropdown",

  props: {
    tabindex: {
      type: Number,
      required: false,
      default: 1,
    },
    hasArrow: {
      type: Boolean,
      default: true,
    },
    isSelect: {
      type: Boolean,
      default: false,
    },
    triangleClass: {
      type: String,
      default: "",
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    handleHide() {
      this.isShow = false;
      this.$emit("open", this.isShow);
    },
    handleToggle() {
      this.isShow = !this.isShow;
      this.$emit("open", this.isShow);
    },
  },
};
</script>
