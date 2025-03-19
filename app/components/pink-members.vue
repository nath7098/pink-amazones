<template>
  <div v-if="memberCount" class="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg border border-pink-100">
    <!-- Concentric circles animation -->
    <div class="relative flex justify-center items-center h-64">
      <!-- Animated background circles -->
      <div class="absolute w-56 h-56 rounded-full bg-pink-50 animate-pulse-slow opacity-70"></div>
      <div class="absolute w-48 h-48 rounded-full bg-purple-50 animate-pulse-medium opacity-80"></div>
      <div class="absolute w-40 h-40 rounded-full bg-pink-100 animate-pulse-fast opacity-60"></div>

      <!-- People icons spreading around the circle -->
      <div v-for="(position, index) in personPositions" :key="index"
           class="absolute transform -translate-x-3 -translate-y-3"
           :style="{
             top: `calc(50% + ${position.y}px)`,
             left: `calc(50% + ${position.x}px)`,
             animationDelay: `${index * 0.2}s`
           }">
        <UIcon
            :name="position.icon"
            class="w-6 h-6 text-pink-500 animate-fade-in"
            :style="{
            '--angle': `${position.angle}deg`,
            '--index': index
          }"
        />
      </div>

      <!-- Central counter -->
      <div class="z-10 bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-md border border-pink-100">
        <span class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          {{ memberCount.toLocaleString('fr') }}
        </span>
        <span class="text-gray-600 text-sm font-medium">adhérents</span>
      </div>
    </div>

    <!-- Tagline -->
    <div class="text-center mt-4">
      <h3 class="text-xl font-medium text-gray-700">Unis contre le cancer</h3>
      <p class="text-gray-600 mt-2">
        <span v-if="memberCount < 100">Chaque personne compte dans notre combat.</span>
        <span v-else-if="memberCount < 500">Une communauté grandissante d'espoir.</span>
        <span v-else-if="memberCount < 1000">Ensemble, nous sommes plus forts.</span>
        <span v-else>Votre soutien transforme des vies.</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;
const adhesionCache = useCookie<{ count: number }>('adhesion-count', { maxAge: 3600 });
const memberCount = ref(await fetchMemberCount());

// Generate positions for person icons around the circle
const personIcons = [
  'i-heroicons-user',
  'i-streamline-medical-ribbon-1',
  'i-heroicons-user-group',
  'i-heroicons-heart'
];

const personPositions = computed(() => {
  const positions = [];
  const count = 12; // Number of icons to display
  const radius = 90; // Fixed radius in pixels for consistent circle

  for (let i = 0; i < count; i++) {
    // Calculate position on a perfect circle
    const angle = (i / count) * 2 * Math.PI;
    const angleDegrees = (i / count) * 360;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    positions.push({
      x,
      y,
      angle: angleDegrees,
      icon: personIcons[i % personIcons.length]
    });
  }

  return positions;
});

async function fetchMemberCount() {
  if (adhesionCache.value) {
    return adhesionCache.value.count;
  }

  try {
    const { data } = await useLazyFetch(`${apiBaseUrl}/adhesions/total`);
    const count = data.value?.total || 0; // Sample fallback count
    adhesionCache.value = { count };
    return count;
  } catch (error) {
    console.error('Error fetching member count:', error);
    return 0; // Sample fallback count
  }
}
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 4s infinite ease-in-out;
}

.animate-pulse-medium {
  animation: pulse 3s infinite ease-in-out;
}

.animate-pulse-fast {
  animation: pulse 2s infinite ease-in-out;
}

.animate-fade-in {
  animation: fadeIn 1s forwards, radialFloat 3s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes radialFloat {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(
        calc(cos(var(--angle)) * 2px),
        calc(sin(var(--angle)) * 2px)
    );
  }
}

/* Fallback for browsers that don't support calc with trig functions */
@supports not (transform: translate(calc(cos(0deg) * 2px), calc(sin(0deg) * 2px))) {
  @keyframes radialFloat {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translateX(2px) translateY(2px);
    }
  }
}
</style>