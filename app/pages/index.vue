<template>
  <div>
    <h2 class="bg-primary py-3 text-center text-3xl font-bold">Tous unis pour une même cause !</h2>
    <div class="custom-gradient pb-6">
      <div class="flex flex-wrap justify-center gap-x-10 gap-y-3 pt-4 text-black">
        <div class="flex items-center gap-x-1 shrink-0">
          <UIcon name="i-heroicons-map-pin" class="w-5 h-5"/>
          <div>Pernay</div>
        </div>
        <div class="flex items-center gap-x-1 shrink-0">
          <UIcon name="i-heroicons-phone" class="w-5 h-5"/>
          <div>06 03 47 28 93</div>
        </div>
        <div class="flex items-center gap-x-1 shrink-0">
          <UIcon name="i-uil-facebook-f" class="w-5 h-5"/>
          <div>@Association Pink Amazones</div>
        </div>
        <div class="flex items-center gap-x-1 shrink-0">
          <UIcon name="i-uil-instagram" class="w-5 h-5"/>
          <div>pink_amazones</div>
        </div>
      </div>
      <div class="flex justify-center">
        <img src="/logo-transparent.png" alt="logo"/>
      </div>
      <div class="flex justify-center">
        <div class="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] gap-8 w-4/5 mx-auto py-10">
          <div v-for="(card, index) in cards" class="flex items-center justify-center group">
            <!-- Container that will be exactly the size of the card -->
            <div class="relative inline-block transform transition-transform duration-300 hover:scale-105">
              <!-- Skewed black box background with subtle gradient -->
              <div
                  class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-lg transform -rotate-3 scale-102 shadow-xl"
                  style="transform-origin: center center;"
              ></div>

              <!-- Original card with improved styling -->
              <UCard class="relative z-10 overflow-hidden border-none shadow-lg">
                <template #header>
                  <div class="relative pb-2 mb-3 border-b border-pink-200">
                    <h4 class="font-molle text-3xl text-pink-600">
                      {{card.title}}
                    </h4>
                    <div class="absolute bottom-0 left-0 w-1/3 h-1 bg-pink-500 rounded-full"></div>
                  </div>
                </template>
                <p class="text-black leading-relaxed">
                  {{card.text}}
                </p>
                <template #footer>
                  <div class="flex justify-end pt-2 mt-4">
                    <button class="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </template>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">

const cards = ref<{ title, text }>([
  {
    title: 'Participer et promouvoir',
    text: `des initiatives de prévention et de sensibilisation au dépistage et aux problèmes liés au cancer du sein,
              tant pour les personnes malades que pour leurs proches.`
  },{
    title: 'Transmettre son exprérience',
    text: `en tant qu'exemple pour les malades du cancer.`
  },{
    title: 'Être un soutien',
    text: `au coprs et à l'esprit, pour les malades du cancer, les personnes en rémission, ainsi qu'à leurs proches.`
  },{
    title: 'Partager ses connaissances',
    text: `réseaux pour éaccompagner au mieux les malades pendant leurs parcours de soins.`
  },{
    title: 'Réalisation d\'évènements et collectes de dons',
    text: ``
  },{
    title: 'Engager des actions',
    text: `qui ont vocation à créer une dynamique d'espoir.`
  },
]);
</script>
<style scoped>
.custom-gradient {
  background: linear-gradient(0deg, rgba(219, 39, 119, 1) 0%, rgba(219, 39, 119, 1) 41%, rgba(219, 39, 119, 0) 86%, rgba(219, 39, 119, 0) 100%);
}
</style>
