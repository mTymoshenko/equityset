<template>
  <div class="form-group">
    <label v-if="label" class="form-group__label font-medium m-bottom-5">
      {{ label }}
    </label>

    <div class="form-group__inner" :class="{ 'is-disabled': isDisabled }">
      <div v-if="hasPrepandSlot" class="form-group__prepand-icon">
        <slot name="prepandIcon" />
      </div>

      <input
        class="form-group__input input flex-center"
        type="text"
        :disabled="isDisabled"
        v-model="localValue"
        :placeholder="placeholder"
        v-on="{
          ...$listeners,
          input: (event) => $emit('update:value', event.target.value),
        }"
        :class="{
          'has-prepand-icon': hasPrepandSlot,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "base-input",

  props: {
    isDisabled: Boolean,
    value: [String, Number],
    label: String,
    placeholder: String,
  },

  data() {
    return {
      localValue: "",
    };
  },

  computed: {
    hasPrepandSlot() {
      return this.hasSlot("prepandIcon");
    },
  },

  created() {
    this.setLocalValue(this.value);
  },

  methods: {
    hasSlot(title) {
      return !!this.$slots[title] || !!this.$scopedSlots[title];
    },

    setLocalValue(value) {
      this.localValue = value;
    },
  },
};
</script>
