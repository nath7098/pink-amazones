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
                <img v-if="event.image" :src="event.image" class="absolute top-0"/>
                <UIcon v-else name="i-heroicons-calendar-days" class="w-24 h-24 text-pink-300"/>
              </div>
              <div
                  class="absolute top-4 left-4 bg-pink-600 text-white py-1 px-3 rounded-full text-sm font-bold shadow-md">
                {{ event.date }}
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
              </div>

              <div class="flex justify-end">
                <UButton
                    variant="outline"
                    color="pink"
                    class="rounded-full group-hover:bg-pink-600 group-hover:text-white transition-colors"
                >
                  <UIcon name="i-heroicons-ticket" class="w-4 h-4 mr-1"/>
                  S'inscrire
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
              <td class="py-3 px-4 text-gray-700">{{ event.date }}</td>
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
    </div>
</template>

<style scoped>
.shadow-text {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  title: 'Nos Évènements',
  catchLine: 'Rejoignez-nous pour agir contre le cancer du sein'
})

// Active filter state
const activeFilter = ref('all');

// Set filter function
const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Sample upcoming events data
const upcomingEvents = [
  {
    title: 'Salon des roses',
    date: '08 Mar 2025',
    time: '10:00 - 17:00',
    location: 'L\'escale - Allée René Coulon 37540 Saint-Cyr-Sur-Loire',
    description: 'Gratuit et ouvert à tous !',
    type: 'Sensibilisation',
    image: 'https://cdn.eu.yapla.com/company/CPYtv0MnpBl4ROU59xFwmdsIk/88625/241789/images/1-1739978466.jpg'
  },
  {
    title: 'Atelier Bien-être',
    date: '15 Avr 2025',
    time: '14:30 - 16:30',
    location: 'Centre communal, Pernay',
    description: 'Séance de yoga et méditation pour les patientes et leurs proches.',
    type: 'Soutien'
  },
  {
    title: 'Dîner Caritatif',
    date: '02 Mai 2025',
    time: '19:30 - 23:00',
    location: 'Salle des fêtes, Pernay',
    description: 'Soirée gastronomique dont les bénéfices financeront nos actions de soutien.',
    type: 'Collecte de fonds'
  },
  {
    title: 'Conférence Prévention',
    date: '18 Mai 2025',
    time: '18:00 - 20:00',
    location: 'Mairie de Pernay',
    description: 'Intervention de professionnels de santé sur l\'importance du dépistage précoce.',
    type: 'Sensibilisation'
  }
];

// Sample past events data
const pastEvents = [
  {
    title: 'Course pour la vie',
    date: '10 Oct 2024',
    location: 'Parc de Pernay',
    type: 'Sensibilisation'
  },
  {
    title: 'Vente de pâtisseries',
    date: '25 Sep 2024',
    location: 'Marché de Pernay',
    type: 'Collecte de fonds'
  },
  {
    title: 'Groupe de parole',
    date: '15 Sep 2024',
    location: 'Centre social, Pernay',
    type: 'Soutien'
  },
  {
    title: 'Exposition photos',
    date: '01 Sep 2024',
    location: 'Médiathèque de Pernay',
    type: 'Sensibilisation'
  },
  {
    title: 'Concert solidaire',
    date: '15 Août 2024',
    location: 'Place de l\'église, Pernay',
    type: 'Collecte de fonds'
  }
];

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
</script>