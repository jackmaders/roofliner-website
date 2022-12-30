<template>
  <nav
    id="nav"
    class="sticky top-0 bg-white border-b-2 border-gray-200 z-NAVBAR"
  >
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between h-14">
        <!-- logo -->
        <a href="#" class="">
          <img
            class="h-4"
            src="@/assets/images/roofliner-logo.webp"
            alt="roofliner logo"
            width="125"
            height="16"
          />
        </a>

        <!-- desktop links icon -->
        <div class="items-center hidden gap-6 md:flex">
          <a
            v-for="(navbarLink, index) in navbarLinks"
            :key="index"
            :href="navbarLink.path"
            class="py-2 font-semibold uppercase hover:bg-gray-300 lg:font-bold"
            @click="showDropdown = !showDropdown"
          >
            {{ navbarLink.name }}
          </a>
        </div>

        <!-- mobile burger icon -->
        <font-awesome-icon
          :icon="showDropdown ? 'xmark' : 'bars'"
          @click="showDropdown = !showDropdown"
          class="text-xl md:hidden"
        />
      </div>
    </div>
    <!-- mobile dropdown -->
    <div
      class="absolute flex-col w-full px-4 overflow-hidden bg-white divide-y md:hidden"
      :class="showDropdown ? 'flex' : 'hidden'"
    >
      <a
        v-for="(navbarLink, index) in navbarLinks"
        :key="index"
        :href="navbarLink.path"
        class="py-2 text-sm font-semibold text-right uppercase hover:bg-gray-300"
        @click="showDropdown = !showDropdown"
      >
        {{ navbarLink.name }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const navbarLinks = [
  {
    name: "Options",
    path: "#options",
  },
  {
    name: "Features",
    path: "#benefits",
  },
  {
    name: "Reviews",
    path: "#reviews",
  },
];

const showDropdown = ref(false);
</script>
