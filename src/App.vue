<script setup>
import FeaturesBlock from "./components/blocks/features/FeaturesBlock.vue";
import HeaderBlock from "./components/blocks/header/HeaderBlock.vue";
import OptionsBlock from "./components/blocks/options/OptionsBlock.vue";
import ReviewsBlock from "./components/blocks/reviews/ReviewsBlock.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheModal from "./components/layout/TheModal.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
</script>

<template>
  <TheModal></TheModal>
  <TheNavbar></TheNavbar>
  <main>
    <HeaderBlock></HeaderBlock>
    <OptionsBlock></OptionsBlock>
    <FeaturesBlock></FeaturesBlock>
    <ReviewsBlock></ReviewsBlock>
  </main>
  <TheFooter></TheFooter>
</template>
