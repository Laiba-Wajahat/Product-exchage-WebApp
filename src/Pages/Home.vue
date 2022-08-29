<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>

        <!-- HERO -->
        <exchange-hero />

        <!-- POST LIST START -->
        <exchange-list :exchanges="exchanges" />

        <!-- PAGINATION START -->
        <exchange-pagination />

    </div>
</template>

<script>

import ExchangeHero from '../Components/HeroSec.vue';
import ExchangeList from '../Components/ExchangeList.vue';
import ExchangePagination from '../Components/PaginationSec.vue';

export default {
    components: {
        ExchangeHero,
        ExchangeList,
        ExchangePagination
    },
    computed: {
        exchanges() {
            return this.$store.state.exchanges;
        }
    },
    created() {
        this.$store.dispatch("getExchanges")
    }
}
</script>
