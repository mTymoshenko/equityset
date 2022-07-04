<template>
  <div class="search-wrap">
    <div class="search flex-center m-right-40" @click="isShowSearch = true">
      <BaseIcon name="search" />
    </div>
    <Backdrop :show="isShowSearch" @click="handleHideSearch" />

    <BaseTransition>
      <div class="search-inner flex-center flex-column" v-if="isShowSearch">
        <div class="search-inner__field">
          <BaseInput :value.sync="search" placeholder="Search">
            <template #prepandIcon>
              <BaseIcon class="search-inner__icon" name="search" />
            </template>
          </BaseInput>
        </div>
        <div class="results">
          <div class="results__title title-h6 m-top-10 m-bottom-10 font-medium">
            RECENT SEARCHES
          </div>
          <div class="results__list">
            <div
              class="results__item flex flex-align-center"
              @click="handleHideSearch"
              v-for="(result, index) in resuls"
              :key="index"
            >
              <BaseIcon name="recent" class="m-right-10" />
              {{ result.text }}
            </div>
          </div>
        </div>
      </div>
    </BaseTransition>
  </div>
</template>

<script>
import Backdrop from "./Backdrop";

export default {
  name: "search",

  data() {
    return {
      isShowSearch: false,
      search: "",
    };
  },

  computed: {
    resuls() {
      return [
        {
          id: 1,
          text: "Product update",
        },
        {
          id: 2,
          text: "Product update",
        },
        {
          id: 3,
          text: "Product update",
        },
      ];
    },
  },

  methods: {
    handleHideSearch() {
      this.isShowSearch = false;
    },
  },

  components: {
    Backdrop,
  },
};
</script>
