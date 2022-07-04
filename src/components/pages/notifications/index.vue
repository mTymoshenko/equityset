<template>
  <div class="notifications">
    <div class="notifications__inner">
      <div class="notifications__title title-h1 font-bold">
        Notification & Alerts
      </div>
      <div class="notifications__subtitle m-top-10 title-h5">
        Customize the notification and alerts experience
      </div>

      <UserEmail class="m-top-20 m-bottom-40" />
      <UserDelivery class="m-bottom-40" />
      <UserWeeklyDays class="m-bottom-40" />
      <UserAlerts class="m-bottom-40" />

      <Accordions />
    </div>
  </div>
</template>

<script>
import UserEmail from "./settings/UserEmail";
import UserDelivery from "./settings/UserDelivery";
import UserWeeklyDays from "./settings/UserWeeklyDays";
import UserAlerts from "./settings/UserAlerts";

import Accordions from "./accordions";

export default {
  name: "notifications",
  components: {
    UserEmail,
    UserDelivery,
    UserWeeklyDays,
    UserAlerts,
    Accordions,
  },
};
</script>
