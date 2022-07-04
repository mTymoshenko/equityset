<template>
  <div class="accordion">
    <div class="accordion__header flex flex-align-center flex-justify-between">
      <div class="accordion__header-title text-h4 font-bold">
        <slot name="title" />
      </div>
      <div @click="toggleBody" class="accordion__header-trigger font-medium">
        <slot name="trigger" :show="show">
          {{ show ? "Show less" : "Show More" }}
        </slot>
      </div>
    </div>
    <div ref="body" class="accordion__body" :style="{ height }">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "0px",
      show: false,
      timeout: null,
    };
  },

  props: {
    isOpen: Boolean,
  },

  mounted() {
    if (this.isOpen) {
      this.showBody();
    }
  },

  methods: {
    toggleBody() {
      if (this.show) {
        this.hideBody();
        return;
      }

      this.showBody();
    },

    async showBody() {
      this.height = `${this.$refs.body.scrollHeight}px`;
      this.show = true;
      clearTimeout(this.timeout);

      await this.$nextTick();
      this.timeout = setTimeout(() => {
        this.height = "";
      }, 250);
    },

    async hideBody() {
      this.height = `${this.$refs.body.scrollHeight}px`;
      this.show = false;
      clearTimeout(this.timeout);

      await this.$nextTick();
      this.timeout = setTimeout(() => {
        this.height = "0px";
      }, 0);
    },
  },
};
</script>
