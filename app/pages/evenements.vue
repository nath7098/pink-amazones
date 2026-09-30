<template>
    <div class="container mx-auto px-4 py-16">
      <!-- Introduction Section -->
      <div class="max-w-4xl mx-auto text-center mb-16 mt-6">
        <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
          Tout au long de l'année, Pink Amazones organise des événements pour sensibiliser,
          soutenir et collecter des fonds pour notre cause. Retrouvez ici notre calendrier
          et rejoignez-nous pour faire la différence ensemble.
        </p>
        <div class="my-8 flex justify-center">
          <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
        </div>
      </div>

      <!-- Calendar Highlight Section -->
      <div class="max-w-5xl mx-auto mb-16">
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-pink-100">
          <div class="flex flex-col md:flex-row">
            <button class="md:w-2/5 bg-pink-50 p-4 flex items-center justify-center" @click="openPoster(calendar)">
              <img :src="calendar.src" :alt="calendar.alt" class="rounded-lg shadow-md max-h-[32rem] object-contain transition-transform hover:scale-[1.02]"/>
            </button>
            <div class="md:w-3/5 p-8">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
                Octobre Rose & novembre 2026
                <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
              </h2>
              <p class="text-gray-700 mb-4">
                Retrouvez tous nos rendez-vous d'Octobre Rose et de novembre 2026 : marches solidaires, stands de
                sensibilisation, tournoi de tennis de table... Ensemble contre le cancer du sein !
              </p>
              <p class="text-gray-700 mb-6">
                Cette année, retrouvez sur nos stands notre
                <ULink to="/autopalpation" class="text-pink-600 font-semibold hover:underline">buste pédagogique d'autopalpation</ULink> :
                un nouvel outil pour une prévention plus concrète et interactive !
              </p>
              <div class="flex flex-wrap gap-3">
                <UButton variant="solid" color="pink" class="rounded-full" @click="openPoster(calendar)">
                  <UIcon name="i-heroicons-calendar-days" class="w-5 h-5 mr-1"/>
                  Voir le calendrier
                </UButton>
                <UButton variant="outline" color="pink" class="rounded-full" to="/autopalpation">
                  <UIcon name="i-heroicons-hand-raised" class="w-5 h-5 mr-1"/>
                  L'autopalpation
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="max-w-5xl mx-auto mb-8">
        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-funnel" class="w-5 h-5 text-pink-600"/>
            <span class="font-medium text-gray-700">Filtrer par :</span>
          </div>

          <div class="flex flex-wrap gap-3 justify-center">
            <UButton
                size="sm"
                variant="soft"
                color="pink"
                class="rounded-full"
                :class="activeFilter === 'all' ? 'bg-pink-200' : ''"
                @click="setFilter('all')"
            >
              Tous
            </UButton>
            <UButton
                size="sm"
                variant="soft"
                color="pink"
                class="rounded-full"
                :class="activeFilter === 'awareness' ? 'bg-pink-200' : ''"
                @click="setFilter('awareness')"
            >
              Sensibilisation
            </UButton>
            <UButton
                size="sm"
                variant="soft"
                color="pink"
                class="rounded-full"
                :class="activeFilter === 'fundraising' ? 'bg-pink-200' : ''"
                @click="setFilter('fundraising')"
            >
              Collecte de fonds
            </UButton>
            <UButton
                size="sm"
                variant="soft"
                color="pink"
                class="rounded-full"
                :class="activeFilter === 'support' ? 'bg-pink-200' : ''"
                @click="setFilter('support')"
            >
              Soutien
            </UButton>
          </div>
        </div>
      </div>

      <!-- Upcoming Events Section -->
      <div class="max-w-5xl mx-auto mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
          Événements à venir
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(event, index) in filteredUpcomingEvents" :key="index"
               class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100">
            <div class="h-48 bg-pink-100 relative overflow-hidden">
              <div class="absolute inset-0 bg-pink-200 flex items-center justify-center">
                <img v-if="event.image" :src="event.image" :alt="event.title" class="absolute top-0 w-full cursor-zoom-in" @click="openPoster({src: event.image, alt: event.title})"/>
                <UIcon v-else name="i-heroicons-calendar-days" class="w-24 h-24 text-pink-300"/>
              </div>
              <div
                  class="absolute top-4 left-4 bg-pink-600 text-white py-1 px-3 rounded-full text-sm font-bold shadow-md">
                {{ event.date.toLocaleDateString('fr', {day: '2-digit', month: 'short', year: 'numeric'}) }}
              </div>
              <div
                  class="absolute top-4 right-4 bg-white text-pink-600 py-1 px-3 rounded-full text-sm font-bold shadow-md">
                {{ event.type }}
              </div>
            </div>

            <div class="p-6">
              <h3 class="font-bold text-xl mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                {{ event.title }}</h3>
              <p class="text-gray-600 mb-4">{{ event.description }}</p>

              <div class="flex flex-col gap-2 mb-4">
                <div class="flex items-center text-gray-500">
                  <UIcon name="i-heroicons-clock" class="w-5 h-5 mr-2 text-pink-500"/>
                  <span>{{ event.time }}</span>
                </div>
                <div class="flex items-center text-gray-500">
                  <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2 text-pink-500"/>
                  <span>{{ event.location }}</span>
                </div>
                <div v-if="event.price != undefined" class="flex items-center text-gray-500">
                  <UIcon name="i-heroicons-currency-euro" class="w-5 h-5 mr-2 text-pink-500"/>
                  <span>{{ event.price.toLocaleString('fr') }} €</span>
                </div>
                <div v-if="event.priceAdh != undefined" class="flex items-center text-gray-500">
                  <UIcon name="i-heroicons-currency-euro" class="w-5 h-5 mr-2 text-pink-500"/>
                  <span>adhérent : {{ event.priceAdh.toString().match('[0-9]+') ? event.priceAdh.toLocaleString('fr') + " €" : event.priceAdh }}</span>
                </div>
              </div>

              <div class="flex justify-end">
                <div class="flex flex-col gap-2">
                  <UButton
                      v-if="event.link"
                      @click.prevent="openLink(event.link)"
                      variant="outline"
                      color="pink"
                      class="rounded-full group-hover:bg-pink-600 group-hover:text-white transition-colors"
                  >
                    <UIcon name="i-heroicons-ticket" class="w-4 h-4 mr-1"/>
                    S'inscrire
                  </UButton>
                  <UButton
                      v-if="event.linkAdh"
                      @click.prevent="openLink(event.linkAdh)"
                      variant="outline"
                      color="pink"
                      class="rounded-full group-hover:bg-pink-600 group-hover:text-white transition-colors"
                  >
                    <UIcon name="i-heroicons-ticket" class="w-4 h-4 mr-1"/>
                    S'inscrire - Adhérent
                  </UButton>
                </div>
                <UButton
                    v-if="!event.link && !event.linkAdh"
                    disabled
                    variant="outline"
                    color="pink"
                    class="rounded-full"
                >
                  <UIcon name="i-heroicons-ticket" class="w-4 h-4 mr-1"/>
                  Sans inscription
                </UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- No events message (conditionally shown) -->
        <div v-if="filteredUpcomingEvents.length === 0"
             class="text-center py-10 bg-pink-50 rounded-xl border border-pink-100">
          <UIcon name="i-heroicons-calendar" class="w-12 h-12 text-pink-300 mx-auto mb-4"/>
          <p class="text-lg text-gray-600">Aucun événement ne correspond à vos critères actuellement.</p>
          <UButton
              variant="ghost"
              color="pink"
              class="mt-4"
              @click="setFilter('all')"
          >
            Voir tous les événements
          </UButton>
        </div>
      </div>

      <!-- Posters Section -->
      <div class="max-w-5xl mx-auto mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
          Nos affiches
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button v-for="(poster, index) in posters" :key="index"
                  class="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100 text-left"
                  @click="openPoster(poster)">
            <div class="aspect-[3/4] overflow-hidden bg-pink-50">
              <img :src="poster.src" :alt="poster.alt" loading="lazy"
                   class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"/>
            </div>
            <p class="p-3 text-sm font-medium text-gray-700 group-hover:text-pink-600">{{ poster.alt }}</p>
          </button>
        </div>
      </div>

      <!-- Collecte Solidaire Section -->
      <div class="max-w-5xl mx-auto mb-16">
        <div class="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl shadow-md overflow-hidden">
          <div class="p-8 flex flex-col md:flex-row gap-8 items-center">
            <div class="md:w-2/3">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
                Collecte solidaire
                <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
              </h2>
              <p class="text-gray-700 mb-4">
                Donnez une seconde vie à vos accessoires ! Pink Amazones collecte vos accessoires liés au parcours du
                cancer du sein afin qu'ils puissent être utiles à d'autres femmes : soutiens-gorge, brassières et
                lingerie post-opératoires, prothèses mammaires externes, maillots de bain adaptés, accessoires
                post-opératoires (foulards, coussins, ceintures...).
              </p>
              <p class="text-gray-700 mb-4">
                Les articles collectés sont transmis à <span class="font-semibold">Crabette</span> (Toulouse), qui les
                trie et les valorise pour permettre à des femmes touchées par le cancer du sein d'accéder à des
                accessoires adaptés à des prix accessibles. Les articles déposés doivent être propres et en parfait état.
              </p>
              <p class="text-gray-700 font-medium">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-1 text-pink-600 align-text-bottom"/>
                Boîte de collecte solidaire disponible à la mairie de Ballan-Miré.
              </p>
            </div>
            <button class="md:w-1/3" @click="openPoster(collecte)">
              <img :src="collecte.src" :alt="collecte.alt" loading="lazy" class="rounded-lg shadow-md transition-transform hover:scale-[1.02]"/>
            </button>
          </div>
        </div>
      </div>

      <!-- Past Events Section -->
      <div class="max-w-5xl mx-auto mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
          Événements passés
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
        </h2>

        <div v-if="filteredPastEvents.length > 0" class="bg-white rounded-xl shadow-md overflow-hidden">
          <table class="w-full">
            <thead class="bg-pink-50">
            <tr>
              <th class="py-3 px-4 text-left text-gray-700 font-semibold">Date</th>
              <th class="py-3 px-4 text-left text-gray-700 font-semibold">Événement</th>
              <th class="py-3 px-4 text-left text-gray-700 font-semibold hidden md:table-cell">Lieu</th>
              <th class="py-3 px-4 text-left text-gray-700 font-semibold hidden md:table-cell">Type</th>
              <th class="py-3 px-4 text-right text-gray-700 font-semibold">Photos</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(event, index) in filteredPastEvents" :key="index"
                class="border-t border-pink-100 hover:bg-pink-50 transition-colors">
              <td class="py-3 px-4 text-gray-700">{{ event.date.toLocaleDateString('fr', {day: '2-digit', month: 'short', year: 'numeric' }) }}</td>
              <td class="py-3 px-4 text-gray-700 font-medium">{{ event.title }}</td>
              <td class="py-3 px-4 text-gray-600 hidden md:table-cell">{{ event.location }}</td>
              <td class="py-3 px-4 hidden md:table-cell">
                  <span class="px-2 py-1 rounded-full text-xs font-medium"
                        :class="{
                          'bg-pink-100 text-pink-700': event.type === 'Sensibilisation',
                          'bg-green-100 text-green-700': event.type === 'Collecte de fonds',
                          'bg-blue-100 text-blue-700': event.type === 'Soutien'
                        }">
                    {{ event.type }}
                  </span>
              </td>
              <td class="py-3 px-4 text-right">
                <UButton
                    variant="ghost"
                    color="pink"
                    size="sm"
                    to="/photos"
                    class="text-pink-600 hover:text-pink-700"
                >
                  <UIcon name="i-heroicons-photo" class="w-5 h-5"/>
                </UButton>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- No past events message (conditionally shown) -->
        <div v-if="filteredPastEvents.length === 0"
             class="text-center py-10 bg-pink-50 rounded-xl border border-pink-100">
          <UIcon name="i-heroicons-photo" class="w-12 h-12 text-pink-300 mx-auto mb-4"/>
          <p class="text-lg text-gray-600">Aucun événement passé ne correspond à vos critères actuellement.</p>
          <UButton
              variant="ghost"
              color="pink"
              class="mt-4"
              @click="setFilter('all')"
          >
            Voir tous les événements
          </UButton>
        </div>
      </div>

      <!-- Propose an Event Section -->
      <div class="max-w-4xl mx-auto bg-pink-50 rounded-xl shadow-md p-8 mb-16">
        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <div class="md:w-2/3">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
              Proposez votre événement
              <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
            </h2>
            <p class="text-gray-700 mb-4">
              Vous avez une idée d'événement pour soutenir la lutte contre le cancer du sein ?
              Partagez-la avec nous, et ensemble, donnons vie à votre initiative !
            </p>
          </div>
          <div class="md:w-1/3 flex justify-center">
            <UButton
                variant="solid"
                color="pink"
                size="lg"
                class="rounded-full shadow-md transform transition-transform hover:scale-105"
                to="/contact"
            >
              <UIcon name="i-heroicons-sparkles" class="w-5 h-5 mr-1"/>
              Proposer une idée
            </UButton>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center max-w-4xl mx-auto mb-16">
        <p class="text-2xl font-bold text-pink-700 mb-8">Soutenez nos événements et notre mission</p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <UButton
              variant="solid"
              color="pink"
              size="xl"
              class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
              to="/don"
          >
            <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2"/>
            Faire un don
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
      <!-- Poster Lightbox -->
      <UModal v-model="posterOpen" :ui="{ width: 'sm:max-w-3xl' }">
        <div class="p-4 bg-white rounded-lg">
          <div class="relative">
            <img :src="currentPoster?.src" :alt="currentPoster?.alt" class="w-full rounded-lg"/>
            <UButton
                variant="ghost"
                color="white"
                class="absolute top-2 right-2 bg-pink-900/50 hover:bg-pink-900/70"
                @click="posterOpen = false"
            >
              <UIcon name="i-heroicons-x-mark" class="w-5 h-5"/>
            </UButton>
          </div>
          <p class="mt-3 font-bold text-gray-800">{{ currentPoster?.alt }}</p>
        </div>
      </UModal>
    </div>
</template>

<style scoped>
.shadow-text {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEventsStore } from '../stores/events';

definePageMeta({
  title: 'Nos Évènements',
  catchLine: 'Rejoignez-nous pour agir contre le cancer du sein'
})

const eventsStore = useEventsStore();

// Active filter state
const activeFilter = ref('all');

// Set filter function
const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Sample upcoming events data
const upcomingEvents = eventsStore.upcomingEvents;

// Sample past events data
const pastEvents = eventsStore.pastEvents;

// Filtered upcoming events based on active filter
const filteredUpcomingEvents = computed(() => {
  if (activeFilter.value === 'all') {
    return upcomingEvents;
  } else {
    const filterMap = {
      'awareness': 'Sensibilisation',
      'fundraising': 'Collecte de fonds',
      'support': 'Soutien'
    };
    return upcomingEvents.filter(event => event.type === filterMap[activeFilter.value]);
  }
});

// Filtered past events based on active filter
const filteredPastEvents = computed(() => {
  if (activeFilter.value === 'all') {
    return pastEvents;
  } else {
    const filterMap = {
      'awareness': 'Sensibilisation',
      'fundraising': 'Collecte de fonds',
      'support': 'Soutien'
    };
    return pastEvents.filter(event => event.type === filterMap[activeFilter.value]);
  }
});

// Posters
const calendar = {src: '/img/events/2026/calendrier-octobre-novembre-2026.jpg', alt: 'Calendrier Octobre Rose & novembre 2026'};
const collecte = {src: '/img/events/2026/collecte-solidaire.jpg', alt: 'Collecte solidaire'};
const posters = [
  calendar,
  {src: '/img/events/2026/marche-solidaire-wefit.jpg', alt: 'Marche solidaire - 3 octobre 2026'},
  {src: '/img/events/2026/octobre-rose-langeais.jpg', alt: 'Octobre Rose à Langeais - 8 octobre 2026'},
  {src: '/img/events/2026/octobre-rose-cormery.jpg', alt: 'Octobre Rose à Cormery - 11 octobre 2026'},
  {src: '/img/events/2026/belle-aubriere-fondettes.jpg', alt: 'La Belle Aubrière - 7 novembre 2026'},
  {src: '/img/events/2026/belle-aubriere-programme.jpg', alt: 'La Belle Aubrière - Programme'},
];

const posterOpen = ref(false);
const currentPoster = ref(null);

const openPoster = (poster) => {
  currentPoster.value = poster;
  posterOpen.value = true;
}

const openLink = (link) => {
  if (link) {
    navigateTo(link, {external: true, open: {target: '_blank'}});
  }
}
</script>