<template>
  <dialog
    ref="dialog"
    class="flex flex-col gap-2 text-white border-2 backdrop:opacity-50 backdrop:bg-black rounded-xl bg-primary-600"
    @close="emit('update:modal', null)"
  >
    <div class="flex items-center justify-between mx-2">
      <h2 class="text-xl font-bold uppercase">{{ modal?.title }}</h2>
      <font-awesome-icon
        :icon="'times'"
        @click="closeDialog()"
        class="text-xl cursor-pointer"
      />
    </div>
    <component :is="props.modal?.component"></component>
  </dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({ modal: Object });
const emit = defineEmits(["update:modal"]);

const dialog = ref("dialog");

watch(props, (newProps) => {
  const newComponent = newProps.modal?.component;
  if (newComponent) dialog.value.showModal();
});

function closeDialog() {
  if (props.modal.component) dialog.value.close();
}
</script>
