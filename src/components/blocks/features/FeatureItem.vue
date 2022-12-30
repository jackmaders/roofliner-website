<template>
  <div class="flex flex-col items-center justify-start gap-1">
    <font-awesome-icon :icon="props.icon" class="text-6xl text-white" />
    <span class="text-xl font-bold text-center text-white uppercase">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({ icon: String });
</script>
