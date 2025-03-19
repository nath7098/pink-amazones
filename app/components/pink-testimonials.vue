<template>
  <div class="grid md:grid-cols-2 gap-8">
    <div v-for="(testimonial, index) in testimonials" :key="index"
         class="bg-white p-6 rounded-xl shadow-md border border-pink-100 cursor-pointer hover:shadow-lg transition-shadow duration-300"
         @click="toggleExpandedCard(index)">
      <div class="flex items-center mb-4">
        <div class="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center text-pink-600 mr-4">
          <UIcon name="i-heroicons-user-circle" class="w-10 h-10"/>
        </div>
        <div>
          <h4 class="font-bold text-gray-800">{{ testimonial.name }}</h4>
        </div>
      </div>

      <!-- Shortened text with ellipsis when not expanded -->
      <p v-if="!expandedCards[index]" class="text-gray-700 italic">
        "{{ shortenText(testimonial.text) }}"
        <span class="text-pink-600 font-medium ml-1">Lire plus</span>
      </p>

      <!-- Full text when expanded -->
      <div v-else>
        <p class="text-gray-700 italic mb-3">
          "{{ testimonial.text }}"
        </p>
        <button @click.stop="toggleExpandedCard(index)"
                class="text-pink-600 font-medium hover:text-pink-700 transition-colors">
          Réduire
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Testimonial data
const testimonials = ref([
  {
    name: "Sandrine W.",
    text: "J'ai rencontré Linda en septembre 2019 alors que nous arrivions toutes les 2 en famille dans la région. Nous nous croisions régulièrement à l'école, toujours le sourire aux lèvres. Puis j'ai appris sa maladie et cela m'à paru une évidence de lire son livre. L'important n'est sûrement pas ce que l'on dit mais surtout de manifester sa présence, son soutien à travers des petites actions comme adhérer à son association. Nous sommes TOUTES concernées, continue d'avoir le sourire et de te battre Linda!"
  },
  {
    name: "Emilie P.",
    text: "Linda a toujours été un exemple pour moi de courage mais aussi de partage. Elle a vécu et vit encore ce cancer et malgré cela a toujours été hyper investie pour les autres malgré toutes les épreuves qu'elle a pu affronter et qu'elle peut encore affronter. Elle est une source d encouragement, elle est à l'écoute en tout temps, et je peux l'affirmer ! Son parcours ne s'est pas arrêté à sa personne mais aux autres, et c'est une qualité qui se perd de nos jours.... Face à la maladie avoir des personnes comme elles qui nous permettent de continuer à garder espoir, d être conseillé, d être rassuré, que ce soit en tant qu aidant ou malade, est à mon sens indispensable. J ai voulu faire partie des adhérents pour montrer que Pink Amazones devait exister, et pouvoir apporter une pierre à son édifice pour que chacunes d entre nous puissent se sentir moins seules était un petit geste pour une grande cause. Et chaque jour nous montre que la vie peut être cruelle et nous avons besoin les uns des autres pour que la celle-ci soit plus douce, ensemble c'est mieux. Merci à elle et celles qui permettent que cela puisse perdurer. Merci pour tous tes conseils, ta générosité du coeur et ton investissement inébranlable."
  }
]);

// Track which cards are expanded
const expandedCards = ref({});

// Function to toggle expanded state
function toggleExpandedCard(index) {
  expandedCards.value[index] = !expandedCards.value[index];
}

// Function to shorten text with ellipsis
function shortenText(text) {
  const maxLength = 120;
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
</script>