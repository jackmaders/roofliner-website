<script setup>
import FeaturesBlock from "./components/blocks/features/FeaturesBlock.vue";
import HeaderBlock from "./components/blocks/header/HeaderBlock.vue";
import OptionsBlock from "./components/blocks/options/OptionsBlock.vue";
import ReviewsBlock from "./components/blocks/reviews/ReviewsBlock.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheModal from "./components/layout/TheModal.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";

import { ref } from "vue";

const modalComponent = ref();

function updateComponent(component) {
  modalComponent.value = component;
}
</script>

<template>
  <TheNavbar></TheNavbar>
  <main>
    <HeaderBlock></HeaderBlock>
    <FeaturesBlock></FeaturesBlock>
    <OptionsBlock></OptionsBlock>
    <ReviewsBlock></ReviewsBlock>
  </main>
  <TheFooter></TheFooter>
  <TheModal
    :component="modalComponent"
    @update:component="updateComponent(null)"
  ></TheModal>
</template>
