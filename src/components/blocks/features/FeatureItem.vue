<template>
  <div class="flex flex-col items-center justify-start">
    <!-- mobile burger icon -->
    <font-awesome-icon :icon="props.icon" class="text-6xl" />
    <span class="text-xl font-extrabold text-center text-black uppercase">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({ icon: String });
</script>
