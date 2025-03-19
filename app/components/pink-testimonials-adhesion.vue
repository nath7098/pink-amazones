<template>
  <div class="grid md:grid-cols-1 gap-8">
    <div class="bg-white p-6 rounded-xl shadow-md border border-pink-100 cursor-pointer hover:shadow-lg transition-shadow duration-300"
         @click="toggleExpandedCard">
      <div class="flex items-center mb-4">
        <div class="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center text-pink-600 mr-4">
          <UIcon name="i-heroicons-user-circle" class="w-10 h-10"/>
        </div>
        <div>
          <h4 class="font-bold text-gray-800">{{ testimonial.name }}</h4>
        </div>
      </div>

      <!-- Shortened text with ellipsis when not expanded -->
      <p v-if="!expandedCards" class="text-gray-700 italic" v-html="shortenText(testimonial.text)">

      </p>

      <!-- Full text when expanded -->
      <div v-else>
        <p class="text-gray-700 italic mb-3" v-html="testimonial.text">
        </p>
        <button @click.stop="toggleExpandedCard"
                class="text-pink-600 font-medium hover:text-pink-700 transition-colors">
          Réduire
        </button>
      </div>

      <div class="text-start text-gray-800 mt-8">
        <div>Catherine Demay</div>
        <div>Thérapeute Certifiée Sophrologie Hypnose et Gestion des Syndromes post traumatiques</div>
        <div>Fondettes,le 28 février 25</div>
      </div>
    </div>
  </div>
</template>

<script setup>

// Testimonial data
const testimonial = ref(
  {
    name: "Catherine D.",
    text: `J'ai rencontré récemment Linda qui a partagé son expérience de la maladie et de ses implications à tous les niveaux personnels et professionnels...
    <br />
    Linda est en effet une amazone...une guerrière, mais pas seulement , elle est une résiliente qui a la volonté de partager ses multiples expériences de ce cancer en aidant d' autres femmes qui vivent cette maladie, les traitements, leurs effets et les répercussions sur leurs proches.
    <br />
    Alors Pink Amazone a été créée et est portée par Linda et son Équipe.
Vous penserez peut-être " encore une association qui parle du cancer..."
je répondrai une association de plus certes... mais dans ce domaine plus l'information sur les différents types de cancers du sein est diffusée plus cela aidera des femmes en souffrance et leurs proches ...
    <br />
    Grâce à  Linda et son Équipe, Pink Amazone resonne d'une vraie humanité et d'un respect de l'autre en souffrance ...
    `
  });

// Track which cards are expanded
const expandedCards = ref(false);

// Function to toggle expanded state
function toggleExpandedCard() {
  expandedCards.value = !expandedCards.value;
}

// Function to shorten text with ellipsis
function shortenText(text) {
  const maxLength = 240;
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...' + `<span class="text-pink-600 font-medium ml-1">Lire plus</span>`;
}
</script>