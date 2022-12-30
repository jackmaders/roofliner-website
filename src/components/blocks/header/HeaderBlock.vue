<template>
  <header
    id="header"
    class="p-8 bg-center bg-no-repeat bg-cover bg-header-background"
  >
    <!-- TODO: layout for large+ screens -->
    <div class="container flex gap-6 mx-auto lg:gap-16">
      <div class="flex flex-col items-center gap-6 justify-evenly basis-0 grow">
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
        <AppButton class="bg-roofliner-red md:hidden"
          >Get a free quote!
        </AppButton>
      </div>
      <HeaderForm class="basis-0 grow" />
    </div>
  </header>
</template>

<script setup>
import AppButton from "../../shared/AppButton.vue";
import HeaderForm from "./HeaderForm.vue";
</script>
