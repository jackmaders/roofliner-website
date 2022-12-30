<script setup>
import FeaturesBlock from "./components/blocks/features/FeaturesBlock.vue";
import HeaderBlock from "./components/blocks/header/HeaderBlock.vue";
import OptionsBlock from "./components/blocks/options/OptionsBlock.vue";
import ReviewsBlock from "./components/blocks/reviews/ReviewsBlock.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
</script>

<template>
  <TheNavbar></TheNavbar>
  <main>
    <HeaderBlock></HeaderBlock>
    <OptionsBlock></OptionsBlock>
    <FeaturesBlock></FeaturesBlock>
    <ReviewsBlock></ReviewsBlock>
  </main>
  <TheFooter></TheFooter>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
