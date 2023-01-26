<template>
  <section id="options" class="p-8 bg-white">
    <div class="container flex flex-col gap-4 mx-auto">
      <h2 class="text-3xl font-bold text-center text-black uppercase">
        Options
      </h2>
      <!-- TODO: layout for medium+ screens -->
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
        <OptionCard
          v-for="(card, index) in optionCards"
          :key="index"
          :class="card.backgroundClass"
          @click="
            emit('update:modal', {
              title: card.title,
              component: card.modalComponent,
            })
          "
        >
          {{ card.title }}
        </OptionCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import OptionCard from "./OptionCard.vue";
import SlateModal from "../../modals/SlateModal.vue";
import ShingleModal from "../../modals/ShingleModal.vue";
import VeluxModal from "../../modals/VeluxModal.vue";
import SupplyModal from "../../modals/SupplyModal.vue";

const emit = defineEmits(["update:modal"]);

const optionCards = [
  {
    title: "Slate Tiling",
    modalComponent: SlateModal,
    backgroundClass: "bg-slate-tiles",
  },
  {
    title: "Shingle Tiling",
    modalComponent: ShingleModal,
    backgroundClass: "bg-shingle-tiles",
  },
  {
    title: "Velux Windows",
    modalComponent: VeluxModal,
    backgroundClass: "bg-velux-window",
  },
  {
    title: "Supply Only",
    modalComponent: SupplyModal,
    backgroundClass: "bg-supply-only",
  },
];
</script>
