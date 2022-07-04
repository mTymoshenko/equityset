<template>
  <div class="notifications">
    <div class="markets-title">Notifications</div>
    <BaseCard class="notifications__card">
      <div class="notifications__card-title title-h5 font-medium">
        Select which types of emails you would like to receive
      </div>
      <ul class="notifications__list">
        <li class="notifications__item" v-for="item in list" :key="item.id">
          <BaseCheckbox
            class="notifications__checkbox"
            :value.sync="item.selected"
            :checked="item.selected"
          >
            <div class="notifications__content">
              <div class="notifications__header flex">
                <div
                  class="notifications__header-title font-bold"
                  :class="{ 'is-active': item.isRecommended }"
                >
                  {{ item.title }}
                </div>
                <div
                  class="notifications__header-budge m-left-10"
                  v-if="item.isRecommended"
                >
                  <span class="title-h6 font-medium">Recommended</span>
                </div>
              </div>

              <div class="notifications__text title-h5 m-top-5">
                {{ item.text }}
              </div>
            </div>
          </BaseCheckbox>
        </li>
      </ul>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: "user-alerts",

  computed: {
    list() {
      return [
        {
          id: 1,
          title: "Investor Summary",
          text: "Important product updates from Equityset. New features and new research tools",
          isRecommended: true,
          selected: true,
        },
        {
          id: 2,
          title: "Important updates",
          text: "Important product updates from Equityset. New features and new research tools",
          isRecommended: false,
          selected: false,
        },
        {
          id: 3,
          title: "Marketing Campaigns",
          text: "Offers, discounts, referrals and other exclusive offers",
          isRecommended: false,
          selected: false,
        },
        {
          id: 4,
          title: "Account and Security",
          text: "Emails about suspicious login attempts",
          isRecommended: false,
          selected: false,
        },
      ];
    },
  },
};
</script>
