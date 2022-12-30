<template>
  <section id="features" class="p-8 bg-white">
    <div class="container flex flex-col gap-6 mx-auto">
      <h2 class="text-3xl font-bold text-center uppercase">Features</h2>

      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        <FeatureItem icon="circle-check">simple to order </FeatureItem>
        <FeatureItem icon="clock">complete in 1 day</FeatureItem>
        <FeatureItem icon="money-bill">Lower energy bills</FeatureItem>
        <FeatureItem icon="book">Building Control Approved</FeatureItem>
        <FeatureItem icon="droplet-slash">Watertight in 3 hours </FeatureItem>
        <FeatureItem icon="screwdriver-wrench">Easy to Installed </FeatureItem>
        <!-- TODO: add more features-->
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureItem from "./FeatureItem.vue";
</script>
