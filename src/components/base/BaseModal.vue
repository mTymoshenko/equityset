<template>
  <BaseTransition>
    <div
      role="dialog"
      :aria-label="label"
      aria-modal="true"
      class="modal flex-center"
    >
      <Backdrop v-if="hasBackdrop" @click="handleCloseModal" />

      <div class="modal__content">
        <BaseIcon
          v-if="hasClose"
          class="modal__close"
          name="close"
          @click="handleCloseModal"
        />
        <slot />
      </div>
    </div>
  </BaseTransition>
</template>

<script>
import Backdrop from "@/components/common/Backdrop";

export default {
  name: "base-modal",

  components: {
    Backdrop,
  },

  props: {
    label: {
      required: true,
      type: String,
    },

    hasClose: {
      type: Boolean,
      default: true,
    },

    hasBackdrop: {
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    this.handleActivate();
  },

  destroyed() {
    this.handleDeactivate();
  },

  methods: {
    handleCloseEsc(e) {
      const ESC = 27;
      if (e.keyCode !== ESC) return;
      this.handleCloseModal();
    },
    handleCloseModal() {
      this.$emit("close");
    },
    handleActivate() {
      document.addEventListener("keyup", this.handleCloseEsc);
      this.handleDisableScrolling();
      this.handleInert();
    },
    async handleDeactivate() {
      document.removeEventListener("keyup", this.handleCloseEsc);
      this.handleEnableScrolling();
      await this.handleInert(false);
    },
    handleDisableScrolling() {
      this.scrollPosition = window.pageYOffset;

      // Disable scrolling on all devices (including iOS).
      const { body } = document;
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${this.scrollPosition}px`;
      body.style.width = "100%";
    },
    handleEnableScrolling() {
      const { body } = document;

      body.style.removeProperty("overflow");
      body.style.removeProperty("position");
      body.style.removeProperty("top");
      body.style.removeProperty("width");

      window.scrollTo(0, this.scrollPosition);
    },
    async handleInert(status = true) {
      await this.$nextTick();
      [...this.$root.$el.children].forEach((child) => {
        if (child === this.$el || child.contains(this.$el)) return;
        child.inert = status;
      });
    },
  },
};
</script>
