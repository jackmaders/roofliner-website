<script setup>
import FeaturesBlock from "./components/blocks/features/FeaturesBlock.vue";
import HeaderBlock from "./components/blocks/header/HeaderBlock.vue";
import OptionsBlock from "./components/blocks/options/OptionsBlock.vue";
import ReviewsBlock from "./components/blocks/reviews/ReviewsBlock.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheModal from "./components/layout/TheModal.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";

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
