<template>
  <form class="grid grid-cols-2 gap-2" @submit="handleSubmit">
    <AppInput
      required
      type="text"
      name="name"
      id="name"
      placeholder="Name"
      class="col-span-2"
    ></AppInput>
    <AppInput
      required
      type="text"
      name="postcode"
      id="postcode"
      placeholder="Postcode"
      class="col-span-2"
    ></AppInput>
    <AppInput
      required
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
      required
      type="number"
      name="width"
      id="width"
      placeholder="Width"
      class="col-span-1"
    ></AppInput>
    <AppInput
      required
      type="number"
      name="height"
      id="height"
      placeholder="Height"
      class="col-span-1"
    ></AppInput>
    <AppButton class="col-span-2 mx-auto bg-secondary-500">
      {{ props.buttonText }}
    </AppButton>
  </form>
</template>

<script setup>
import AppButton from "./AppButton.vue";
import AppInput from "./AppInput.vue";
import AppSelect from "./AppSelect.vue";

const props = defineProps({ buttonText: String });

function handleSubmit($event) {
  $event.preventDefault;
}

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
