<template>
  <ul class="nav">
    <li class="nav__item" v-for="nav in navList" :key="nav.title">
      <Dropdown
        class="nav__dropdown"
        triangle-class="nav__triangle"
        v-if="nav.isDropdown"
      >
        <template #selection="{ isShow }">
          <div class="nav__link" :class="{ 'is-active': isShow }">
            {{ nav.title }}
          </div>
        </template>
        <template #body>
          <div class="nav__nested flex flex-column">
            <router-link
              class="nav__link nav__link--dropdown"
              v-for="dropdownItem in nav.dropdownList"
              active-class="is-active"
              :key="dropdownItem.title"
              :to="dropdownItem.to"
            >
              {{ dropdownItem.title }}
            </router-link>
          </div>
        </template>
      </Dropdown>
      <router-link
        class="nav__link nav__link--header"
        v-else
        active-class="is-active"
        :to="nav.to"
      >
        {{ nav.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import Dropdown from "@/components/common/Dropdown";

export default {
  components: { Dropdown },

  props: {
    handleHide: {
      type: Function,
      default: null,
    },
  },

  computed: {
    navList() {
      return [
        {
          title: "Today",
          to: "/today",
          isDropdown: false,
        },
        {
          title: "Markets",
          to: "/markets",
          isDropdown: false,
        },
        {
          title: "Screener",
          to: "/screener",
          isDropdown: false,
        },
        {
          title: "Ideas",
          to: "/ideas",
          isDropdown: false,
        },
        {
          title: "learn",
          isDropdown: true,
          dropdownList: [
            {
              title: "markets",
              to: "/markets",
            },
            {
              title: "Home",
              to: "/home",
            },
          ],
        },
      ];
    },
  },
};
</script>
