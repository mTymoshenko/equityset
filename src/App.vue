<template>
  <div id="app">
    <BaseLayout>
      <router-view />
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";

export default {
  components: {
    BaseLayout,
  },
};
</script>
