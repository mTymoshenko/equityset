<template>
  <div class="weekly">
    <div class="markets-title">Fair Value updates</div>
    <BaseCard class="weekly__card">
      <ul class="weekly__list">
        <li class="weekly__item flex" v-for="item in list" :key="item.id">
          <div
            class="weekly__item-col weekly__item-col--intro flex flex-column"
          >
            <span class="weekly__item-col__title title-h4 font-bold">
              {{ item.title }}
            </span>
            <span class="weekly__item-col__subtitle title-h5 m-top-5">
              {{ item.subtitle }}
            </span>
          </div>
          <div class="weekly__item-col flex-center flex-column">
            <span class="text-upper font-medium m-bottom-5">Sms</span>
            <BaseCheckbox :value.sync="item.sms" :checked="item.sms" />
          </div>
          <div class="weekly__item-col flex-center flex-column">
            <span class="font-medium m-bottom-5">Email</span>
            <BaseCheckbox :value.sync="item.email" :checked="item.email" />
          </div>
        </li>
      </ul>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: "user-weekly-days",

  data() {
    return {
      list: [
        {
          id: 1,
          title: "Daily",
          subtitle: "Securites that hit their Fair Value",
          sms: false,
          email: false,
        },
        {
          id: 2,
          title: "Weekly",
          subtitle: "Securites that hit their Fair Value",
          sms: false,
          email: false,
        },
      ],
    };
  },
};
</script>
