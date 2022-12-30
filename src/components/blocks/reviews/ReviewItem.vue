<template>
  <article class="grid w-full grid-cols-4 gap-1 px-4 py-2 bg-white rounded-lg">
    <p class="col-span-4 text-gray-500">
      {{ dateString }}
    </p>
    <div class="flex items-center justify-center col-span-1">
      <img
        class="w-full rounded-full aspect-square"
        :src="props.review.photo"
        alt=""
      />
    </div>
    <div
      class="flex flex-col items-center justify-center col-span-3 xs:items-start"
    >
      <h3 class="text-lg font-bold">
        {{ props.review.name }}
      </h3>
      <div class="">
        <font-awesome-icon
          class="text-lg text-yellow-500"
          icon="star"
          v-for="index in props.review.rating"
          :key="index"
        />
      </div>
    </div>
    <p
      class="col-span-4"
      :class="
        textExpanded ? '' : 'overflow-hidden text-ellipsis whitespace-nowrap'
      "
    >
      {{ props.review.text }}
    </p>
    <button
      class="col-span-4 text-blue-700 cursor-pointer hover:underline"
      @click="toggleExpandText()"
    >
      {{ textExpanded ? "Read Less" : "Read More" }}
    </button>
  </article>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";

const props = defineProps({
  review: Object,
});

const dateString = computed(() => {
  const date = props.review.date;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-GB", options);
});

const textExpanded = ref(false);

function toggleExpandText() {
  textExpanded.value = !textExpanded.value;
}
</script>
