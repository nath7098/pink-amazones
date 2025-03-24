<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12 transform transition hover:shadow-xl">
    <div class="md:flex">
      <!-- Left side with image and basic info -->
      <div class="md:w-2/5 bg-pink-50 p-6 flex flex-col justify-center items-center">
        <div class="rounded-full bg-white p-4 mb-6 shadow-md">
          <img :src="partenaire.image" :alt="partenaire.alt" class="w-40 h-40 object-contain rounded-full" />
        </div>
        <h3 class="text-2xl font-bold text-pink-600 mb-3 text-center">{{ partenaire.name }}</h3>
        <p class="text-gray-600 text-center font-medium mb-4">{{ partenaire.description }}</p>
        <div v-if="partenaire.reduction" class="flex items-center bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-bold mb-4">
          <UIcon name="i-heroicons-tag" class="w-5 h-5 mr-2"/>
          <span>{{ partenaire.reduction }}</span>
        </div>
        <div class="mt-4">
          <UButton
              :to="`https://${partenaire.website}`"
              target="_blank"
              color="pink"
              variant="outline"
              class="rounded-full"
          >
            <UIcon name="i-heroicons-globe-alt" class="w-4 h-4 mr-2"/>
            Visiter le site
          </UButton>
        </div>
      </div>

      <!-- Right side with detailed info -->
      <div class="md:w-3/5 p-8">
        <div class="prose max-w-none">
          <slot name="text" />
        </div>

        <!-- Contact information -->
        <div class="mt-6 bg-pink-50 p-4 rounded-lg">
          <h4 class="font-semibold text-pink-700 mb-2">Informations & RDV</h4>
          <div class="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-3">
            <div v-if="partenaire.contactName" class="flex items-center">
              <UIcon name="i-heroicons-user" class="w-5 h-5 text-teal-500 mr-2"/>
              <span class="text-gray-700">{{partenaire.contactName}}</span>
            </div>
            <div v-if="partenaire.diploma" class="flex items-center">
              <UIcon name="i-heroicons-academic-cap" class="w-5 h-5 text-teal-500 mr-2"/>
              <span class="text-gray-700">{{ partenaire.diploma }}</span>
            </div>
            <div v-if="partenaire.phone" class="flex items-center">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 text-pink-500 mr-2"/>
              <a :href="`tel:${partenaire.phone}`" class="text-gray-700 hover:text-pink-600">{{ formatPhone }}</a>
            </div>
            <div v-if="partenaire.mail" class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-pink-500 mr-2"/>
              <a :href="`mailto:${partenaire.mail}`" class="text-gray-700 hover:text-pink-600">{{ partenaire.mail }}</a>
            </div>
            <div v-if="partenaire.website" class="flex items-center">
              <UIcon name="i-heroicons-globe-alt" class="w-5 h-5 text-pink-500 mr-2"/>
              <a :href="`https://${partenaire.website}`" target="_blank" class="text-gray-700 hover:text-pink-600">{{ partenaire.website }}</a>
            </div>
            <div v-if="partenaire.instagram" class="flex items-center">
              <UIcon name="i-mdi-instagram" class="w-5 h-5 text-pink-500 mr-2"/>
              <a :href="`https://${partenaire.instagram}`" target="_blank" class="text-gray-700 hover:text-pink-600">{{ formatInstagram }}</a>
            </div>
            <div v-if="partenaire.location" class="flex items-center md:odd:col-span-2">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-pink-500 mr-2"/>
              <span class="text-gray-700">{{ partenaire.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Partenaire  = {
  image: string,
  alt: string,
  name: string,
  description: string,
  reduction?: string,
  website?: string,
  facebook?: string,
  instagram?: string,
  contactName?: string,
  diploma?: string,
  phone?: string,
  mail?: string,
  location?: string
};

const props = defineProps({partenaire: {type: Object as Partenaire, required: true}});
const partenaire = toRef(() => props.partenaire);

const formatPhone = computed(() => partenaire.value?.phone?.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, '$1 $2 $3 $4 $5'));
const formatInstagram = computed(() => partenaire.value?.instagram?.replace(/(www\.instagram\.com\/)([a-zA-Z0-9\-_]+)\//g, '$2'));

</script>