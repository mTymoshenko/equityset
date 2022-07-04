<template>
  <ul class="breadcrumbs as flex">
    <li
      class="breadcrumbs__item title-h6"
      v-for="(link, index) in links"
      :key="index"
    >
      {{ link.text }}
      <span v-if="index + 1 < links.length"> > </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumbs",

  computed: {
    links() {
      return [
        ...this.$route.path
          .split("/")
          .slice(1)
          .map((seg) => ({ text: seg, disabled: false, href: seg })),
      ];
    },
  },
};
</script>
