<template>
  <div class="container mx-auto px-4 py-16">
    <!-- Introduction Section -->
    <div class="max-w-4xl mx-auto text-center mb-16 mt-6">
      <h3 class="text-2xl md:text-3xl font-semibold text-pink-700 mb-6">Notre buste pédagogique d'autopalpation</h3>
      <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
        Parce que connaître ses seins, c'est déjà agir pour sa santé, Pink Amazones s'est dotée d'un buste pédagogique
        d'autopalpation. Un nouvel outil pour une prévention plus concrète et interactive, à découvrir sur nos stands !
      </p>
      <div class="my-8 flex justify-center">
        <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
      </div>
    </div>

    <!-- Buste Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-pink-100">
        <div class="flex flex-col md:flex-row">
          <button class="md:w-1/2 bg-pink-50" @click="openLightbox(buste)">
            <img :src="buste.src" :alt="buste.alt" class="w-full h-full object-cover"/>
          </button>
          <div class="md:w-1/2 p-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
              Apprendre les bons gestes
              <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
            </h2>
            <p class="text-gray-700 mb-6">
              Le buste reproduit fidèlement la poitrine et permet à chacun·e de s'entraîner, en toute bienveillance,
              à repérer une anomalie. Sur nos stands, venez :
            </p>
            <ul class="space-y-3 text-gray-700">
              <li v-for="(item, index) in stepsStand" :key="index" class="flex items-start">
                <UIcon :name="item.icon" class="w-6 h-6 text-pink-600 mr-3 shrink-0"/>
                <p><span class="font-bold text-pink-700">{{ item.title }}</span> {{ item.text }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Notice Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
        Connaître ses seins : la notice
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>
      <p class="text-gray-700 mt-6 mb-8">
        Une fois par mois, au calme et à distance des règles (si vous n'avez pas de règles, choisissez une date fixe),
        prenez quelques minutes pour observer et palper vos seins. L'autopalpation ne remplace pas le dépistage
        organisé ni l'avis d'un professionnel de santé : en cas de doute, consultez sans attendre.
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        <button v-for="(page, index) in notice" :key="index"
                class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100"
                @click="openLightbox(page)">
          <img :src="page.src" :alt="page.alt" class="w-full"/>
          <p class="p-4 font-medium text-gray-700 group-hover:text-pink-600">{{ page.alt }}</p>
        </button>
      </div>
    </div>

    <!-- Stand Photos Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Notre stand avec le buste
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <button v-for="(photo, index) in standPhotos" :key="index"
                class="group relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md"
                @click="openLightbox(photo)">
          <img :src="photo.src" :alt="photo.alt" loading="lazy"
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
        </button>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center max-w-4xl mx-auto mb-16">
      <p class="text-2xl font-bold text-pink-700 mb-8">Venez nous rencontrer sur nos stands !</p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <UButton
            variant="solid"
            color="pink"
            size="xl"
            class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/evenements"
        >
          <UIcon name="i-heroicons-calendar" class="w-5 h-5 mr-2"/>
          Voir nos événements
        </UButton>

        <UButton
            variant="outline"
            color="pink"
            size="xl"
            class="rounded-full shadow-md transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/contact"
        >
          <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 mr-2"/>
          Nous contacter
        </UButton>
      </div>
    </div>

    <!-- Lightbox -->
    <UModal v-model="lightboxOpen" :ui="{ width: 'sm:max-w-3xl' }">
      <div class="p-4 bg-white rounded-lg">
        <div class="relative">
          <img :src="currentImage?.src" :alt="currentImage?.alt" class="w-full rounded-lg"/>
          <UButton
              variant="ghost"
              color="white"
              class="absolute top-2 right-2 bg-pink-900/50 hover:bg-pink-900/70"
              @click="lightboxOpen = false"
          >
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5"/>
          </UButton>
        </div>
        <p class="mt-3 font-bold text-gray-800">{{ currentImage?.alt }}</p>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Autopalpation',
  catchLine: 'Connaître ses seins pour mieux se protéger'
});

type Picture = { src: string; alt: string };

const buste: Picture = {src: '/img/autopalpation/buste.jpg', alt: 'Buste pédagogique d\'autopalpation'};

const notice: Array<Picture> = [
  {src: '/img/autopalpation/notice-2.jpg', alt: 'Une routine simple d\'autosurveillance'},
  {src: '/img/autopalpation/notice-1.jpg', alt: 'Ce qu\'il faut surveiller'},
];

const standPhotos: Array<Picture> = [1, 2, 3, 4, 5].map(i => ({
  src: `/img/photos/stand_autopalpation/${String(i).padStart(3, '0')}.jpg`,
  alt: 'Stand de sensibilisation Pink Amazones avec le buste d\'autopalpation',
}));

const stepsStand = [
  {icon: 'i-heroicons-chat-bubble-left-right', title: 'Échanger :', text: 'posez-nous toutes vos questions.'},
  {icon: 'i-heroicons-information-circle', title: 'S\'informer :', text: 'sur la prévention et le dépistage.'},
  {icon: 'i-heroicons-hand-raised', title: 'Découvrir :', text: 'les gestes de l\'autopalpation sur le buste.'},
  {icon: 'i-heroicons-user-group', title: 'Partager :', text: 'un moment convivial.'},
];

const lightboxOpen = ref(false);
const currentImage = ref<Picture | null>(null);

const openLightbox = (image: Picture) => {
  currentImage.value = image;
  lightboxOpen.value = true;
}
</script>
