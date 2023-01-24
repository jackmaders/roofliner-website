<template>
  <aside class="hidden grid-cols-2 gap-2 p-3 bg-primary-600 md:grid rounded-xl">
    <AppInput
      type="text"
      name="name"
      id="name"
      placeholder="Name"
      class="col-span-2"
    ></AppInput>
    <AppInput
      type="text"
      name="postcode"
      id="postcode"
      placeholder="Postcode"
      class="col-span-2"
    ></AppInput>
    <AppInput
      type="tel"
      name="telephone"
      id="telephone"
      placeholder="Telephone"
      class="col-span-2"
    ></AppInput>
    <AppSelect name="style" id="style" class="col-span-2" required>
      <option value="" disabled selected hidden>Conservatory Style</option>
      <option
        v-for="(conservatoryStyle, index) in conservatoryStyles"
        :key="index"
        :value="conservatoryStyle"
        class="text-black"
      >
        {{ conservatoryStyle }}
      </option>
    </AppSelect>
    <AppInput
      type="number"
      name="width"
      id="width"
      placeholder="Width"
      class="col-span-1"
    ></AppInput>
    <AppInput
      type="number"
      name="height"
      id="height"
      placeholder="Height"
      class="col-span-1"
    ></AppInput>
    <AppButton class="col-span-2 mx-auto bg-secondary-500"
      >Get a free quote!</AppButton
    >
  </aside>
</template>
<script setup>
import AppButton from "../../shared/AppButton.vue";
import AppInput from "../../shared/AppInput.vue";
import AppSelect from "../../shared/AppSelect.vue";

//TODO: submit functionality

const conservatoryStyles = [
  "Victorian",
  "Edwardian",
  "Gable",
  "Lean-To",
  "P-Shaped",
  "Lantern",
];
</script>
