<template>
  <header class="header">
    <div class="header__container container justify-between">
      <div class="header__logo flex-center">
        <BaseIcon name="logo" />
      </div>
      <div class="header__center flex-center">
        <Search />
        <Nav />
      </div>
      <UserDropdown />
    </div>
  </header>
</template>

<script>
import Nav from "@/components/common/Nav";
import Search from "@/components/common/Search";
import UserDropdown from "@/components/common/UserDropdown";

export default {
  name: "TheHeader",

  components: { Nav, Search, UserDropdown },
};
</script>
