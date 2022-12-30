<template>
  <dialog
    ref="dialog"
    class="h-20 backdrop:opacity-50 backdrop:bg-black rounded-xl"
  >
    <!-- TODO: add dynamic rendering of modal components -->
  </dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";

const dialog = ref();

onMounted(() => {
  // dialog.value.showModal();
});
</script>
