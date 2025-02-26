<template>
    <div class="container mx-auto px-4 pt-8 pb-16">
      <!-- Contact info with improved styling -->
      <div class="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-4 mb-8 bg-white rounded-lg shadow-md p-4">
        <div class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
          <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-pink-600"/>
          <div class="text-gray-800 font-medium">Pernay</div>
        </div>
        <div class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
          <UIcon name="i-heroicons-phone" class="w-6 h-6 text-pink-600"/>
          <div class="text-gray-800 font-medium">06 03 47 28 93</div>
        </div>
        <div class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
          <UIcon name="i-uil-facebook-f" class="w-6 h-6 text-pink-600"/>
          <div class="text-gray-800 font-medium">@Association Pink Amazones</div>
        </div>
        <div class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
          <UIcon name="i-uil-instagram" class="w-6 h-6 text-pink-600"/>
          <div class="text-gray-800 font-medium">pink_amazones</div>
        </div>
      </div>

      <!-- Logo with highlight glow effect -->
      <div class="flex justify-center relative mb-12">

        <div class="relative group">
          <div data-blur class="absolute -inset-1 bg-pink-300 rounded-full blur-xl z-[90] opacity-0 group-hover:opacity-90 transition delay-150 duration-300 ease-out"></div>
          <img src="~/assets/img/logo-transparent.png" alt="Pink Amazones Logo" class="relative max-w-xs md:max-w-sm z-[100]"/>
        </div>
      </div>

      <!-- Mission statement -->
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h3 class="text-2xl md:text-3xl font-semibold text-pink-700 mb-4">Notre Mission</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          Ensemble, nous soutenons les femmes touchées par le cancer du sein. Chaque geste compte, chaque don fait la différence dans notre combat quotidien.
        </p>
      </div>

      <!-- Cards with improved layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
        <div v-for="(card, index) in cards" class="flex items-center justify-center group">
          <!-- Card container with enhanced hover effects -->
          <div class="relative inline-block w-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <!-- Skewed background with pink gradient and better shadow -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 rounded-xl transform shadow-xl"
                style="transform-origin: center center;"
            ></div>

            <!-- Card with improved styling and accessibility -->
            <UCard class="relative z-10 overflow-hidden border-none shadow-lg bg-white rounded-lg">
              <template #header>
                <div class="relative pb-3 mb-4 border-b border-pink-200">
                  <h4 class="font-molle text-3xl text-pink-600 leading-tight">
                    {{card.title}}
                  </h4>
                  <div class="absolute bottom-0 left-0 w-1/3 h-1 bg-pink-500 rounded-full"></div>
                </div>
              </template>
              <p class="text-gray-700 leading-relaxed">
                {{card.text}}
              </p>
              <template #footer>
                <div class="flex justify-end pt-3 mt-4">
                  <button class="px-5 py-2 text-sm font-medium text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    En savoir plus
                  </button>
                </div>
              </template>
            </UCard>
          </div>
        </div>
      </div>

      <!-- Support ribbon banner -->
      <div class="mt-20 bg-pink-600 text-white rounded-lg shadow-lg p-6 text-center max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-lg md:text-xl font-semibold">Rejoignez notre combat contre le cancer du sein</div>
          <button class="bg-white text-pink-600 hover:bg-pink-100 px-6 py-3 rounded-full font-bold transition-colors shadow-md">
            Faire un don
          </button>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'A propos',
  catchLine: 'Tous unis pour une même cause !'
})
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
