<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <BaseIcon name="logo" />
        <div class="footer__nav flex">
          <ul class="footer__list" :key="index" v-for="(item, index) in list">
            <li
              class="footer__list-item footer__list-item--title font-bold title-h5"
            >
              {{ item.title }}
            </li>
            <li
              class="footer__list-item m-top-10 title-h6"
              v-for="(link, ind) in item.links"
              :key="ind"
            >
              <router-link class="footer__list-link" :to="link.to">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__social flex flex-align-start">
          <div
            class="footer__social-item"
            v-for="social in socials"
            :key="social.name"
          >
            <BaseIcon :name="social.name" />
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-text title-h5">
          Disclaimers: EquitySet LLC is not operated by a broker, a dealer, or a
          registered investment adviser. Under no circumstances does any
          information posted on EquitySet LLC represent an individualized
          recommendation to buy or sell a security. The information on this
          site, and in its related emails and newsletters, is not intended to
          be, nor does it constitute individual investment advice or
          recommendations. The users may buy and sell securities before and
          after any particular article and report and information herein is
          published, with respect to the securities discussed in any article and
          report posted herein. In no event shall EquitySet LLC be liable to any
          member, guest or third party for any damages of any kind arising out
          of the use of any content or other material published or available on
          EquitySet LLC, or relating to the use of, or inability to use,
          equitysetdata.com or any content, including, without limitation, any
          investment losses, lost profits, lost opportunity, special,
          incidental, indirect, consequential or punitive damages. Past
          performance is a poor indicator of future performance. The information
          on this site is in no way guaranteed for completeness, accuracy or in
          any other way. The companies listed on this website are not affiliated
          with EquitySet LLC .
        </div>
        <div class="footer__bottom-desc">
          Equityset does not provide individualized investment advice or
          recommendations for individual portfolios.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",

  computed: {
    list() {
      return [
        {
          title: "Support",
          links: [
            {
              title: "Pricing",
              to: "",
            },
            {
              title: "Documentation",
              to: "",
            },
            {
              title: "Guides",
              to: "",
            },
            {
              title: "API Status",
              to: "",
            },
          ],
        },
        {
          title: "Product",
          links: [
            {
              title: "Pricing",
              to: "",
            },
            {
              title: "Documentation",
              to: "",
            },
            {
              title: "Guides",
              to: "",
            },
            {
              title: "API Status",
              to: "",
            },
          ],
        },
        {
          title: "Education",
          links: [
            {
              title: "Pricing",
              to: "",
            },
            {
              title: "Documentation",
              to: "",
            },
            {
              title: "Guides",
              to: "",
            },
            {
              title: "API Status",
              to: "",
            },
          ],
        },
        {
          title: "About",
          links: [
            {
              title: "Pricing",
              to: "",
            },
            {
              title: "Documentation",
              to: "",
            },
            {
              title: "Guides",
              to: "",
            },
            {
              title: "API Status",
              to: "",
            },
          ],
        },
      ];
    },
    socials() {
      return [
        {
          name: "facebook",
          to: "",
        },
        {
          name: "instagram",
          to: "",
        },
        {
          name: "tw",
          to: "",
        },
        {
          name: "github",
          to: "",
        },
        {
          name: "draw",
          to: "",
        },
      ];
    },
  },
};
</script>
