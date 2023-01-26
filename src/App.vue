<script setup>
import FeaturesBlock from "./components/FeaturesBlock.vue";
import HeaderBlock from "./components/HeroBlock.vue";
import OptionsBlock from "./components/blocks/options/OptionsBlock.vue";
import ReviewsBlock from "./components/ReviewsBlock.vue";
import TheFooter from "./components/TheFooter.vue";
import TheModal from "./components/TheModal.vue";
import TheNavbar from "./components/TheNavbar.vue";

import { shallowRef } from "vue";

const currentModal = shallowRef(null);

function updateModal(newModal) {
  currentModal.value = newModal;
}
</script>

<template>
  <TheNavbar></TheNavbar>
  <main>
    <HeaderBlock @update:modal="updateModal"></HeaderBlock>
    <FeaturesBlock></FeaturesBlock>
    <OptionsBlock @update:modal="updateModal"></OptionsBlock>
    <ReviewsBlock></ReviewsBlock>
  </main>
  <TheFooter></TheFooter>
  <TheModal :modal="currentModal" @update:modal="updateModal"></TheModal>
</template>
