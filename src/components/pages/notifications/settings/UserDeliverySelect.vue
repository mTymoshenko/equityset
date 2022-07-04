<template>
  <Dropdown :is-select="true">
    <template #selection>
      <div class="delivery-selection title-h5 font-medium">
        <slot name="selection" />
      </div>
    </template>
    <template #body="{ handleHide }">
      <ul class="delivery-list">
        <li
          class="delivery-list__item"
          v-for="t in time"
          :key="t"
          @click="handleSelectItem(handleHide, { type, t })"
        >
          {{ t }}
        </li>
      </ul>
    </template>
  </Dropdown>
</template>

<script>
import Dropdown from "@/components/common/Dropdown";

export default {
  props: {
    type: {
      type: String,
      default: "from",
      validator: (v) => ["from", "to"].includes(v),
    },
  },

  components: {
    Dropdown,
  },

  computed: {
    time() {
      const output = [];
      for (var i = 1; i < 25; i++) {
        var am = "AM",
          pm = "PM",
          ampm,
          timeUnit,
          timeValue,
          timeStamp;

        timeUnit = i > 12 ? i - 12 : i;
        ampm = i < 12 || i > 23 ? am : pm;

        timeValue = this.handleZero(timeUnit);
        timeStamp = timeValue + " " + ampm;
        output.push(timeStamp);
      }
      return output;
    },
  },

  methods: {
    handleSelectItem(hide, { type, t }) {
      this.$emit("select", { type, time: t });
      hide();
    },
    handleZero(value) {
      const pad = "00";

      return pad.substring(0, pad.length - value.toString().length) + value;
    },
  },
};
</script>
