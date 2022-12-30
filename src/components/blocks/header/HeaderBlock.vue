<template>
  <header
    id="header"
    class="p-8 bg-center bg-no-repeat bg-cover bg-header-background"
  >
    <div class="container flex flex-col items-center gap-6 mx-auto">
      <h1
        class="text-3xl font-extrabold text-center text-white uppercase text-shadow-xl"
      >
        Tiled conservatory roofs
      </h1>
      <p
        class="text-2xl font-bold text-center text-white uppercase text-shadow-xl"
      >
        <span>Stay </span>
        <span class="text-roofliner-blue">cool</span>
        <span> in summer and </span>
        <span class="text-roofliner-red">warm</span>
        <span> in winter! </span>
      </p>
      <AppButton class="bg-roofliner-red">Get a quote</AppButton>
    </div>
  </header>
</template>

<script setup>
import AppButton from "../../shared/AppButton.vue";
</script>
