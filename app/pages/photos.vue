<template>
  <div class="container mx-auto px-4 py-16">
    <!-- Gallery Introduction -->
    <div class="max-w-4xl mx-auto text-center mb-12">
      <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
        Découvrez en images les moments forts de nos événements et nos actions de sensibilisation.
      </p>
      <div class="my-6 flex justify-center">
        <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
      </div>
    </div>

    <!-- Gallery Filters -->
    <div class="mb-10 flex flex-wrap justify-center gap-3">
      <UButton
          v-for="category in categories"
          :key="category.id"
          :variant="selectedCategory === category.id ? 'solid' : 'outline'"
          color="pink"
          size="md"
          class="rounded-full"
          @click="selectedCategory = category.id"
      >
        {{ category.name }}
      </UButton>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
      <div
          v-for="(image, index) in filteredImages"
          :key="index"
          class="cursor-pointer group"
          @click="openLightbox(image)"
      >
        <div class="relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md">
          <!-- Loading placeholder -->
          <div
              v-if="!image.loaded"
              class="absolute inset-0 bg-pink-100 flex items-center justify-center"
          >
            <UIcon name="i-heroicons-photo" class="w-10 h-10 text-pink-300" />
          </div>

          <!-- Image with loading handler -->
          <img
              :src="image.src"
              :alt="image.alt"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @load="image.loaded = true"
              v-show="image.loaded"
          />

          <!-- Image overlay with caption -->
          <div class="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p class="text-white font-medium">{{ image.title }}</p>
            <p class="text-pink-100 text-sm">{{ image.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state when no images match filter -->
    <div v-if="filteredImages.length === 0" class="text-center py-12">
      <UIcon name="i-heroicons-photo" class="w-16 h-16 text-pink-200 mx-auto mb-4" />
      <p class="text-gray-500">Aucune image disponible dans cette catégorie</p>
    </div>

    <!-- Lightbox -->
    <UModal v-model="lightboxOpen">
      <div class="p-4 bg-white rounded-lg max-w-3xl">
        <div class="relative">
          <img
              :src="currentImage?.src"
              :alt="currentImage?.alt"
              class="w-full rounded-lg"
          />
          <UButton
              variant="ghost"
              color="white"
              class="absolute top-2 right-2 bg-pink-900/50 hover:bg-pink-900/70"
              @click="lightboxOpen = false"
          >
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
          </UButton>
        </div>
        <div class="mt-4">
          <h3 class="font-bold text-lg">{{ currentImage?.title }}</h3>
          <p class="text-gray-500">{{ currentImage?.date }}</p>
          <p class="mt-2 text-gray-700">{{ currentImage?.description }}</p>
        </div>
      </div>
    </UModal>

    <!-- Call to Action -->
    <div class="text-center max-w-4xl mx-auto mb-16">
      <p class="text-2xl font-bold text-pink-700 mb-8">Rejoignez-nous lors de nos prochains événements</p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <UButton
            variant="solid"
            color="pink"
            size="xl"
            class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/evenements"
        >
          <UIcon name="i-heroicons-calendar" class="w-5 h-5 mr-2" />
          Voir nos événements
        </UButton>

        <UButton
            variant="outline"
            color="pink"
            size="xl"
            class="rounded-full shadow-md transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/adhesion"
        >
          <UIcon name="i-heroicons-user-plus" class="w-5 h-5 mr-2" />
          Devenir membre
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  title: 'Galerie Photos',
  catchLine: 'Nos actions en images'
})

// Image loading state
const lightboxOpen = ref(false)
const currentImage = ref(null)

// Categories for filtering
const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'events', name: 'Événements' },
  { id: 'awareness', name: 'Sensibilisation' },
  { id: 'support', name: 'Soutien' },
  { id: 'workshops', name: 'Ateliers' }
]
const selectedCategory = ref('all')

// Sample gallery images
const images = ref([
  {
    id: 1,
    src: 'https://www.letrait.fr/wp-content/uploads/2023/09/%C3%A9v%C3%A8nement-web-occtobre-rose-2023-900x587-760x500.jpg',
    alt: 'Marche Rose - Octobre 2024',
    title: 'Marche Rose',
    date: 'Octobre 2024',
    category: 'events',
    description: 'Plus de 200 participants ont marché ensemble pour sensibiliser au dépistage du cancer du sein.',
    loaded: false
  },
  {
    id: 2,
    src: '/api/placeholder/800/800',
    alt: 'Atelier bien-être',
    title: 'Atelier bien-être',
    date: 'Septembre 2024',
    category: 'workshops',
    description: 'Un moment de détente et de partage pour les patientes en cours de traitement.',
    loaded: false
  },
  {
    id: 3,
    src: '/api/placeholder/800/800',
    alt: 'Stand de sensibilisation',
    title: 'Stand de sensibilisation',
    date: 'Août 2024',
    category: 'awareness',
    description: 'Notre équipe a animé un stand d\'information sur l\'importance du dépistage précoce.',
    loaded: false
  },
  {
    id: 4,
    src: '/api/placeholder/800/800',
    alt: 'Groupe de parole',
    title: 'Groupe de parole',
    date: 'Juillet 2024',
    category: 'support',
    description: 'Échange et partage d\'expériences entre patientes et anciennes patientes.',
    loaded: false
  },
  {
    id: 5,
    src: '/api/placeholder/800/800',
    alt: 'Course solidaire',
    title: 'Course solidaire',
    date: 'Juin 2024',
    category: 'events',
    description: 'Course organisée au profit de la recherche contre le cancer du sein.',
    loaded: false
  },
  {
    id: 6,
    src: '/api/placeholder/800/800',
    alt: 'Atelier nutrition',
    title: 'Atelier nutrition',
    date: 'Mai 2024',
    category: 'workshops',
    description: 'Conseils et échanges autour de l\'alimentation pendant et après les traitements.',
    loaded: false
  },
  {
    id: 7,
    src: '/api/placeholder/800/800',
    alt: 'Conférence médicale',
    title: 'Conférence médicale',
    date: 'Avril 2024',
    category: 'awareness',
    description: 'Intervention de spécialistes sur les avancées de la recherche contre le cancer du sein.',
    loaded: false
  },
  {
    id: 8,
    src: '/api/placeholder/800/800',
    alt: 'Séance de yoga adapté',
    title: 'Séance de yoga adapté',
    date: 'Mars 2024',
    category: 'support',
    description: 'Séance de yoga spécialement conçue pour les femmes en traitement ou en rémission.',
    loaded: false
  }
])

// Filter images based on selected category
const filteredImages = computed(() => {
  if (selectedCategory.value === 'all') {
    return images.value
  }
  return images.value.filter(image => image.category === selectedCategory.value)
})

// Open lightbox with selected image
const openLightbox = (image) => {
  currentImage.value = image
  lightboxOpen.value = true
}
</script>