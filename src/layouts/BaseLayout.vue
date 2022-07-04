<template>
  <div class="main-l">
    <TheHeader />
    <main class="main flex-grow-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
