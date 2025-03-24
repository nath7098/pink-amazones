<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UModals />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Pink Amazones',
  ogTitle: 'Pink Amazones',
  description: `Parce qu'aucune femme ne devrait affronter le cancer du sein seule, notre association est là pour informer, accompagner et soutenir celles qui en ont besoin.`,
  ogDescription: `Parce qu'aucune femme ne devrait affronter le cancer du sein seule, notre association est là pour informer, accompagner et soutenir celles qui en ont besoin.`,
  ogImage: 'https://pink-amazones.fr/logo.png',
  twitterCard: 'summary_large_image',

});
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: all .4s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
