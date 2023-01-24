<template>
  <dialog
    ref="dialog"
    class="backdrop:opacity-50 backdrop:bg-black rounded-xl"
    @close="emit('update:component', null)"
  >
    <!-- TODO: fix console error with dynamic components  -->
    <div class="flex flex-col items-end">
      <font-awesome-icon
        :icon="'times'"
        @click="closeDialog()"
        class="text-xl cursor-pointer"
      />
      <component :is="props.component"></component>
    </div>
  </dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({ component: Object });
const emit = defineEmits(["update:component"]);

const dialog = ref("dialog");

watch(props, (newProps) => {
  const newComponent = newProps.component;
  if (newComponent) dialog.value.showModal();
});

function closeDialog() {
  if (props.component) dialog.value.close();
}
</script>
