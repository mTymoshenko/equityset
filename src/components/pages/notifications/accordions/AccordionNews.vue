<template>
  <BaseCard>
    <Accordion>
      <template #title> Ideas & News (0) </template>
    </Accordion>
  </BaseCard>
</template>

<script>
import Accordion from "@/components/common/Accordion.vue";

export default {
  name: "news",
  components: {
    Accordion,
  },
};
</script>
