<template>
  <div>
    <!-- Navbar -->
    <exchange-navbar />

    <!-- HERO -->
    <exchange-hero />

    <!-- POST LIST START -->
    <exchange-list />

    <!-- PAGINATION START -->
    <exchange-pagination />

  </div>
</template>

<script>

import ExchangeNavbar from './Components/NavigationBar.vue';
import ExchangeHero from './Components/HeroSec.vue';
import ExchangeList from './Components/ExchangeList.vue';
import ExchangePagination from './Components/PaginationSec.vue';

export default {
  name: 'App',
  components: {
    ExchangeNavbar,
    ExchangeHero,
    ExchangeList,
    ExchangePagination
  }
}
</script>

<style lang="scss">
@import 'assets/styles/variables.scss';
@import '~bulma/bulma.sass';
@import 'assets/styles/main.scss';
</style>
