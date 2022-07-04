<template>
  <div class="checkbox-l" :class="checkboxClassess">
    <input
      :id="id"
      :type="type"
      class="checkbox-l__input"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <label class="checkbox-l__label" :for="id">
      <slot />
    </label>
  </div>
</template>
<script>
export default {
  name: "base-checkbox",

  inheritAttrs: false,

  props: {
    variant: {
      type: String,
      default: "main",
      validator: (value) => ["main", "secondary"].includes(value),
    },
    id: {
      type: [Number, String],
      required: false,
      default: () => Math.random().toString(16).slice(2),
    },
    value: {
      type: [Boolean, String],
      required: false,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: () => "checkbox",
    },
  },

  computed: {
    checkboxClassess() {
      let klass = [`is-${this.variant}`];
      if (this.disabled) {
        klass.push("is-disabled");
      }
      return klass;
    },
  },

  methods: {
    handleChange(e) {
      const { value, checked } = e.target;

      const currentValue = typeof this.value === "boolean" ? checked : value;

      this.$emit("update:value", currentValue);
    },
  },
};
</script>
