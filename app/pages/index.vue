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
        <div class="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] gap-5 w-2/3 mx-auto">
          <div v-for="card in cards" class="flex items-center justify-center">
            <!-- Container that will be exactly the size of the card -->
            <div class="relative inline-block">
              <!-- Skewed black box background -->
              <div
                  class="absolute inset-0 bg-black transform -skew-y-6"
                  style="transform-origin: center center;"
              ></div>

              <!-- Original card -->
              <UCard class="relative h-fit-content z-10">
                <template #header>
                  <h4 class="font-molle text-3xl text-pink-600">
                    {{card.title}}
                  </h4>
                </template>
                <p class="text-black">
                  {{card.text}}
                </p>
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
