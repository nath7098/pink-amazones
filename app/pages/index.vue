<template>
    <div class="container mx-auto px-4 py-16">
      <!-- Mission Statement Section -->
      <div class="max-w-4xl mx-auto text-center mb-16 mt-6">
        <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
          Parce qu'aucune femme ne devrait affronter le cancer du sein seule, notre association est là pour informer, accompagner et soutenir celles qui en ont besoin.
        </p>
        <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
          Chaque jour, nous œuvrons pour sensibiliser à l'importance du dépistage, apporter du réconfort aux patientes et financer des actions concrètes pour améliorer leur quotidien.
        </p>
        <div class="my-10 flex justify-center">
          <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
        </div>
        <p class="text-2xl font-bold text-pink-700 mb-6">Ensemble, nous pouvons faire la différence.</p>
        <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
          Que vous soyez touché(e) de près ou de loin par cette cause, vous avez un rôle à jouer.
          Rejoignez-nous, soutenez nos actions et participez à ce combat essentiel.
        </p>
      </div>

      <!-- Objectives Section -->
      <pink-card title="Nos Objectifs" ribbon ribbon-title="Espoir">
        <p class="text-gray-700 mb-6">L'association PINK AMAZONES a donc pour objectifs de :</p>
        <template #list>
          <ul class="space-y-4 text-gray-700 mb-8">
            <li class="flex items-start justify-center">
              <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
              </div>
              <p>Participer et promouvoir des initiatives de prévention et de sensibilisation au dépistage et aux problèmes liés au cancer du sein, tant pour les personnes malades que pour leurs proches</p>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
              </div>
              <p>Transmettre son expérience en tant qu'exemple pour les malades de cancer</p>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
              </div>
              <p>Partager ses connaissances réseaux pour accompagner au mieux les malades pendant leurs parcours de soins</p>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
              </div>
              <p>Être un soutien au corps et à l'esprit, pour les malades du cancer, les personnes en rémission, ainsi qu'à leurs proches</p>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
              </div>
              <p>Réaliser des évènements et collectes de dons</p>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
              </div>
              <p>Engager des actions qui ont vocation à créer une dynamique d'espoir</p>
            </li>
          </ul>
        </template>
      </pink-card>

      <!-- Financial Support Section -->
      <div class="bg-gradient-to-r from-pink-50 to-white rounded-xl shadow-lg p-8 mb-16 max-w-5xl mx-auto border-l-4 border-pink-500">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative">
          Notre Vision
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
        </h2>

        <p class="text-gray-700 leading-relaxed mb-6">
          En plus de toutes nos actions de sensibilisation et prévention au dépistage du cancer du sein, nous souhaiterions avec les dons, cotisations, arriver à co-financer une partie des besoins des malades comme :
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-8 text-gray-700">
          <div class="bg-white p-4 rounded-lg shadow-sm border border-pink-100 flex items-start">
            <UIcon name="i-heroicons-home" class="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <p>Les frais de chambre particulière après opération</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm border border-pink-100 flex items-start">
            <UIcon name="i-heroicons-shopping-bag" class="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <p>Aide à l'achat de gaines et soutiens-gorge post-opératoires</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm border border-pink-100 flex items-start">
            <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <p>Perruque, prothèse non prise en charge suite à la perte ou prise de poids rapide</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm border border-pink-100 flex items-start">
            <UIcon name="i-heroicons-heart" class="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <p>Frais pour une activité physique adaptée</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm border border-pink-100 flex items-start">
            <UIcon name="i-heroicons-banknotes" class="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <p>Reste à charge sur les opérations de reconstruction</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm border border-pink-100 flex items-start">
            <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="w-5 h-5 text-pink-500 mr-3 mt-1" />
            <p>Séances de psychologues pour les malades, leurs conjoints et enfants</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center max-w-4xl mx-auto mb-16">
        <p class="text-2xl font-bold text-pink-700 mb-8">Agissons aujourd'hui pour un avenir plus fort et plus serein.</p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <UButton
              variant="solid"
              color="pink"
              size="xl"
              class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
              to="/don"
          >
            <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2" />
            Faire un don
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

        <pink-gauge v-if="montant" :montant="montant" :total="total" />
      </div>

      <!-- Upcoming Events Preview -->
      <div class="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 relative">
            Nos Prochains Événements
            <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
          </h2>

          <UButton
              variant="ghost"
              color="pink"
              to="/evenements"
              class="flex items-center"
          >
            Voir tout
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-1" />
          </UButton>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Sample event cards -->
          <div v-for="event in next2Events"
               class="border border-pink-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div class="h-40 bg-pink-200 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-pink-100">
                <img v-if="event.image" :src="event.image" class="absolute top-0"/>
                <UIcon v-else name="i-heroicons-calendar-days" class="w-24 h-24" />
              </div>
              <div class="absolute top-4 left-4 bg-pink-600 text-white py-1 px-3 rounded-full text-sm font-bold">
                {{ event.date.toLocaleDateString('fr', {day: '2-digit', month: 'short', year: 'numeric'}) }}
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2">{{ event.title }}</h3>
              <p class="text-gray-600 mb-3">{{ event.description }}</p>
              <div class="flex items-center text-gray-500 text-sm">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 mr-1" />
                <span>{{ event.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import PinkGauge from '~/components/pink-gauge.vue';

definePageMeta({
  title: 'Bienvenue sur Pink Amazones',
  catchLine: 'Ensemble contre le cancer du sein'
});

const next2Events = useEventsStore().next2Events;
const cagnotte = useCookie('cagnotte', {maxAge: 3600});
const montant = ref(null);
const total = ref(null);
// const percent = computed(() => montant.value ? (montant.value / total.value * 100).toFixed(0) : 0);

onMounted(async () => {
    if (!cagnotte.value) {
      await nextTick(async () => {
        const {data} = await useAsyncData(async () => await $fetch<string>('/api/dons'));
      montant.value = parseInt(data?.value?.dons, 10) ?? null;
      total.value = parseInt(data?.value?.objectif, 10) ?? null;
      cagnotte.value = {montant: montant.value, total: total.value};
      });
    } else {
      total.value = cagnotte.value.total;
      montant.value = cagnotte.value.montant;
    }
})

</script>

<style scoped>

</style>
