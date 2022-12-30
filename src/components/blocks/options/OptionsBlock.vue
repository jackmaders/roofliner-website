<template>
  <section id="options" class="p-8 bg-roofliner-blue">
    <div class="container flex flex-col gap-4 mx-auto">
      <h2 class="text-3xl font-bold text-center text-white uppercase">
        Options
      </h2>
      <div class="grid grid-cols-2 gap-2">
        <OptionCard class="bg-shingle-tiles">slate tiling </OptionCard>
        <OptionCard class="bg-slate-tiles">shingle tiling </OptionCard>
        <OptionCard class="bg-velux-window">velux windows </OptionCard>
        <OptionCard class="bg-supply-only">supply only </OptionCard>
        <!-- TODO: add more options -->
        <OptionCard class="bg-supply-only">supply only </OptionCard>
        <OptionCard class="bg-supply-only">supply only </OptionCard>
        <!-- -->
      </div>
    </div>
  </section>
</template>

<script setup>
import OptionCard from "./OptionCard.vue";
</script>
