<template>
  <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition hover:shadow-xl">
    <div class="rounded-full bg-white p-2 mb-4 shadow-md">
      <img :src="props.image" alt="Nom du membre" class="w-[12.5rem] h-[12.5rem] object-cover rounded-full" />
    </div>
    <h3 class="text-xl font-bold text-pink-600 mb-1">{{ props.name }}</h3>
    <p class="text-gray-600 font-medium mb-3">{{ props.post }}</p>
    <p class="flex flex-col justify-start space-y-3 text-gray-700 text-sm text-justify">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['name', 'post', 'image'])
</script>