<template>
  <BaseCard class="form-group__row dellivery">
    <div class="delivery form-group__col flex justify-between">
      <BaseInput
        class="form-group__phone flex flex-column"
        :is-disabled="isEmailDisabled"
        :value.sync="email"
        label="Mobile Number"
      >
        <template #prepandIcon>
          <BaseIcon name="info" />
        </template>
      </BaseInput>
      <div class="form-group__trigger">
        <BaseIcon name="plus" />
        <span class="title-h5 font-medium"> Add Phone Number </span>
      </div>
    </div>
    <div class="delivery__body flex flex-align-center m-top-20 m-bottom-40">
      <div class="delivery__col delivery__col--text">
        Do not deliver SMS between :
      </div>
      <UserDeliverySelect
        @select="handleSelectData"
        type="from"
        class="delivery__col delivery__col--select"
      >
        <template #selection>
          {{ from }}
        </template>
      </UserDeliverySelect>
      <div class="delivery__col m-left-10 m-right-10">Until</div>
      <UserDeliverySelect
        @select="handleSelectData"
        type="to"
        class="delivery__col delivery__col--select"
      >
        <template #selection>
          {{ to }}
        </template>
      </UserDeliverySelect>
    </div>
    <div class="delivery__footer">
      <div class="delivery__footer-text font-medium">
        By providing your phone number, you agree to receive text messages from
        triggers you enable on your account. Equityset never will share your
        phone number with third parties.
      </div>
    </div>
  </BaseCard>
</template>

<script>
import UserDeliverySelect from "./UserDeliverySelect";

export default {
  components: {
    UserDeliverySelect,
  },

  data() {
    return {
      email: "konstantinos.a@toptal.com",
      isEmailDisabled: true,
      from: "No restriction",
      to: "No restriction",
    };
  },

  methods: {
    handleSelectData({ type, time }) {
      this[type] = time;
    },
  },
};
</script>
