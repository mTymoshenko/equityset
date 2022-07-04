<template>
  <div class="markets flex-grow-1">
    <div class="container">
      <Breadcrumbs />
    </div>

    <div class="markets__container container flex-column">
      <Tabs />

      <div class="markets__notifications m-top-75">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Tabs from "@/components/pages/notifications/Tabs";

export default {
  components: { Breadcrumbs, Tabs },
};
</script>
