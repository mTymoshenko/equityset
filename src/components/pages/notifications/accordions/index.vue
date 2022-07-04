<template>
  <div class="triggers">
    <div class="triggers__title markets-title">Triggers(2)</div>

    <Price class="m-top-10" />
    <Rating class="m-top-10" />
    <Dividents class="m-top-10" />
    <News class="m-top-10" />
  </div>
</template>

<script>
import Price from "./AccordionPrice";
import Rating from "./AccordionRating";
import News from "./AccordionNews";
import Dividents from "./AccordionDividents";

export default {
  components: {
    Price,
    Rating,
    Dividents,
    News,
  },
};
</script>
