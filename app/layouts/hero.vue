<template>
  <!-- Hero Section -->
  <div class="relative group">
    <div
        class="h-64 md:h-96 relative overflow-hidden transition-all duration-150 w-full bg-gradient-to-r from-pink-400 to-pink-600">
      <!-- Decorative pattern overlay -->
      <div class="absolute inset-0 opacity-[7%]"
           style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDE0IDE0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguNDE2LjM2MkEzLjYgMy42IDAgMCAwIDcgLjEzMmEzLjU2MyAzLjU2MyAwIDAgMC0zLjcwNyAzLjY3Yy4wMDcgMS4xMzguNDYxIDIuMzE3IDEuMDM3IDMuMzdhMjEuMTggMjEuMTggMCAwIDAgMS4zOTYgMi4xNTZhMzQgMzQgMCAwIDEtMi4zMjggMi41MDJsLS4yMzUuMjI0QTEgMSAwIDAgMCA0LjUyIDEzLjZjLjMyNy0uMzA0LjY0My0uNjIuOTU0LS45MzhjLjQyNy0uNDM4Ljk2Mi0xLjAxIDEuNTI2LTEuNjY1Yy41NjQuNjU2IDEuMSAxLjIyNyAxLjUyNiAxLjY2NWMuNTUuNTY1IDEuNTA1IDEuODE3IDIuMzY3Ljg4M2ExIDEgMCAwIDAtLjA1Ni0xLjQxM2wtLjAwMi0uMDAyaC0uMDAxYTM0IDM0IDAgMCAxLTIuNTYtMi43MjJBMTggMTggMCAwIDAgOS42NyA3LjI1Yy41NzYtMS4wNjMgMS4wMy0yLjI0MiAxLjAzNy0zLjM4QTMuNTYgMy41NiAwIDAgMCA4LjQxNy4zNjJaTTcgNy43NTVjLjMzNy0uNDgyLjY0OS0uOTczLjkxMi0xLjQ1OGMuNTItLjk2LjcgMS44IDEuNyAxLjhTMTAgNS41NiA5IDEuNyA3LjM1IDEgNiAxLjdsLTEuNi43ODRjMCAuNjU3LjI3NyAxLjQ5Ny43OTYgMi40NTZjLjI2My40ODUuNTc0Ljk3Ni45MTIgMS40NTh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=');"></div>

      <transition name="fade" mode="out-in">
        <div :key="route.fullPath" class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-molle shadow-text">{{ title }}</h1>
          <p class="text-xl md:text-2xl max-w-3xl shadow-text">{{ catchLine }}</p>
        </div>
      </transition>
    </div>
  </div>
  <div class="min-h-screen overflow-y-hidden">
    <slot/>
  </div>
</template>


<script setup lang="ts">
const route = useRoute();

const title = computed(() => route.meta.title);
const catchLine = computed(() => route.meta.catchLine);

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>