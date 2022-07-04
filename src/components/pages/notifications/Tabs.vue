<template>
  <ul class="tabs flex">
    <li class="tabs__item flex-center" v-for="link in tabs" :key="link.id">
      <router-link
        class="font-medium title-h5"
        :to="link.to"
        active-class="is-active"
      >
        {{ link.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "tabs",
  computed: {
    tabs() {
      return [
        {
          id: 1,
          title: "Profile",
          to: "profile",
        },
        {
          id: 2,
          title: "Pricing & Billing",
          to: "pricing",
        },
        {
          id: 3,
          title: "Notification & Alerts",
          to: "notifications",
        },
        {
          id: 4,
          title: "My portofolio",
          to: "portfolio",
        },
      ];
    },
  },
};
</script>
