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

    <!-- Folders Section -->
    <div v-if="showingFolders" class="mb-12">
      <h2 class="text-2xl font-bold text-pink-700 mb-6 text-center">Albums Photos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <div
            v-for="(folder, index) in folders"
            :key="index"
            class="cursor-pointer group"
            @click="openFolder(folder)"
        >
          <div class="relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md">
            <!-- Folder preview (first image or placeholder) -->
            <div
                v-if="!folder.previewLoaded"
                class="absolute inset-0 bg-pink-100 flex flex-col items-center justify-center"
            >
              <UIcon name="i-heroicons-folder" class="w-12 h-12 text-pink-300"/>
              <p class="text-pink-500 font-medium mt-2">{{ folder.name }}</p>
            </div>

            <!-- Folder preview image -->
            <img
                v-if="folder.previewImage"
                :src="folder.previewImage"
                :alt="folder.name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                @load="folder.previewLoaded = true"
                v-show="folder.previewLoaded"
            />

            <!-- Folder overlay with info -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p class="text-white font-medium">{{ folder.name }}</p>
              <p class="text-pink-100 text-sm">{{ folder.images?.length || 0 }} photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Folder View -->
    <div v-if="selectedFolder" class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <UButton
            variant="outline"
            color="pink"
            size="md"
            class="rounded-full"
            @click="closeFolder"
        >
          <UIcon name="i-heroicons-arrow-left" class="w-5 h-5 mr-2"/>
          Retour aux albums
        </UButton>
        <h3 class="text-xl font-bold text-pink-700">{{ selectedFolder.name }}</h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
            v-for="(image, index) in selectedFolder.images"
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
              <UIcon name="i-heroicons-photo" class="w-10 h-10 text-pink-300"/>
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
            <div
                class="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p class="text-white font-medium">{{ image.title || 'Photo' }}</p>
              <p class="text-pink-100 text-sm">{{ image.date || '' }}</p>
            </div>
          </div>
        </div>
      </div>
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
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5"/>
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
          <UIcon name="i-heroicons-calendar" class="w-5 h-5 mr-2"/>
          Voir nos événements
        </UButton>

        <UButton
            variant="outline"
            color="pink"
            size="xl"
            class="rounded-full shadow-md transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/adhesion"
        >
          <UIcon name="i-heroicons-user-plus" class="w-5 h-5 mr-2"/>
          Devenir membre
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  title: 'Galerie Photos',
  catchLine: 'Nos actions en images'
})

// CDN Configuration
const CDN_BASE_URL = 'https://cdn.nathancouton.fr/';

// Event directories with image counts
const EVENT_CONFIGS = {
  'event_curi': {name: 'Défi solidaire 20 000 pochettes Institut Curie', count: 2},
  'event_la_belle_aubriere': {name: 'Marche et course nature à Fondettes', count: 4},
  'event_mfr': {name: 'Intervention MFR d\'azay le rideau', count: 2},
  'event_pslv': {name: 'Stand de sensibilisation et prévention Vinci', count: 3},
  'event_salon_des_roses_2025': {name: 'Salon des roses', count: 7},
  'event_sophrologie_2025': {name: 'Atelier sophrologie', count: 1},
  'event_marche_rose_2025': {name: 'Marche Rose', count: 10}
};

// Image loading state
const lightboxOpen = ref(false);
const currentImage = ref(null);

// Folder handling state
const folders = ref([]);
const selectedFolder = ref(null);
const showingFolders = ref(true);
const showIndividualImages = ref(true);

// Helper function to get all images for a directory
const getImagesForDirectory = (directory: string, data: any) => {
  const images = [];

  for (let i = 1; i <= data.count; i++) {
    const paddedIndex = String(i).padStart(3, '0');
    const imageUrl = `${CDN_BASE_URL}${directory}/${paddedIndex}.jpg`;

    images.push({
      src: imageUrl,
      alt: `${data.name} - Photo ${paddedIndex}`,
      title: `Photo ${data.name}`,
      loaded: false
    });
  }

  return images;
};

// Open lightbox with selected image
const openLightbox = (image) => {
  currentImage.value = image;
  lightboxOpen.value = true;
}

// Open folder to display its images
const openFolder = (folder) => {
  selectedFolder.value = folder;
  showingFolders.value = false;
  showIndividualImages.value = false;
}

// Close folder view and return to main gallery
const closeFolder = () => {
  selectedFolder.value = null;
  showingFolders.value = true;
  showIndividualImages.value = true;
}

// Load folder data on component mount
onMounted(() => {
  try {
    // Process each event directory
    for (const [directory, data] of Object.entries(EVENT_CONFIGS)) {
      const images = getImagesForDirectory(directory, data);

      if (images.length > 0) {
        folders.value.push({
          name: data.name,
          images: images,
          previewImage: images[0]?.src || null,
          previewLoaded: false
        });
      }
    }
  } catch (error) {
    console.error('Error processing folders:', error);
  }
});
</script>