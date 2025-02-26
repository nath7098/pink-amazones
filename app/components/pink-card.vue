<template>
  <div :class="['bg-white rounded-xl shadow-lg p-8 mb-16 max-w-5xl mx-auto border-l-4 border-pink-500', ribbon && 'relative overflow-hidden']">
    <!-- Decorative corner ribbon -->
    <div v-if="ribbon" class="absolute top-0 right-0 translate-y-[45%] -translate-x-[45%] w-20 h-20">
      <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-pink-500 text-white text-xs py-1 px-20 shadow-md">{{ribbonTitle}}</div>
    </div>

    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative">
      {{ title }}
      <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
    </h2>
    <div v-if="$slots.default" class="prose max-w-none text-gray-700">
      <slot />
    </div>
    <div v-if="$slots.list" class="max-w-none text-gray-700" >
      <slot name="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {type: String, required: true},
  ribbon: {type: Boolean, required: false, default: () => false},
  ribbonTitle: String,
});

</script>
