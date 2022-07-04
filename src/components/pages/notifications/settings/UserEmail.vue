<template>
  <BaseCard class="user-email form-group__row flex">
    <BaseInput
      class="user-email__input form-group__email flex flex-column"
      :is-disabled="true"
      :value.sync="email"
      label="Email"
    />

    <div
      class="user-email__text form-group__col font-600 flex flex-align-end p-bottom-10 m-left-10"
    >
      This is the same email you have in your profile account.
    </div>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      email: "konstantinos.a@toptal.com",
    };
  },
};
</script>
