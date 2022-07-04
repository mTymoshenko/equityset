<template>
  <div class="user-dropdown">
    <Backdrop :show="isOpen" class="user-dropdown__backdrop" />
    <Dropdown
      @open="handleOpen"
      :tab-index="3"
      :is-full-width="true"
      :has-arrow="false"
    >
      <template #selection>
        <Burger :is-active="isOpen" />
        <div class="user-dropdown__ava flex-center">
          <BaseIcon name="user" />
          <span class="user-dropdown__budge"></span>
        </div>
      </template>
      <template #body="{ handleHide }">
        <Nav class="user-dropdown__nav" />

        <div
          class="user-dropdown__item text-h6 font-medium"
          @click="handleHide"
        >
          Profile
        </div>
        <div
          class="user-dropdown__item text-h6 font-medium"
          @click="handleHide"
        >
          Logout
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Burger from "./Burger";
import Dropdown from "@/components/common/Dropdown";
import Backdrop from "@/components/common/Backdrop";
import Nav from "@/components/common/Nav";

export default {
  name: "user-dropdown",

  data() {
    return {
      isOpen: false,
    };
  },

  components: {
    Nav,
    Burger,
    Dropdown,
    Backdrop,
  },

  methods: {
    handleOpen(ev) {
      this.isOpen = ev;
    },
  },
};
</script>
