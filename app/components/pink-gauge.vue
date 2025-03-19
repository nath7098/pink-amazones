<template>
  <div></div>
  <div v-if="total" class="mt-8 max-w-2xl mx-auto">
    <!-- Progress stats -->
    <div class="flex justify-between items-center mb-3">
      <div class="flex flex-col">
        <span class="text-pink-700 font-bold text-2xl">{{ total.toLocaleString('fr') }} €</span>
        <span class="text-gray-500 text-sm">récoltés</span>
      </div>
      <div class="px-4 py-2 bg-pink-50 rounded-lg border border-pink-200 shadow-sm">
        <span class="text-pink-700 font-bold">{{ percent }}%</span>
        <span class="text-gray-600 text-sm ml-1">de notre objectif</span>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-gray-700 font-bold text-xl">{{ objectif.toLocaleString('fr') }} €</span>
        <span class="text-gray-500 text-sm">objectif</span>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="h-8 bg-gradient-to-r from-pink-50 to-pink-100 rounded-full shadow-inner relative">
      <div class="h-full rounded-full overflow-hidden">
        <div
            class="h-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 rounded-full transition-all duration-1000 ease-out"
            :style="{ width: `${Math.min(100, percent)}%` }"
        >
          <!-- Animated sparkles -->
          <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute top-0 right-0 h-full w-8 bg-white opacity-20 transform -skew-x-30 animate-shimmer"></div>
          </div>
        </div>
      </div>

      <!-- Heart marker on current progress -->
      <div
          class="absolute top-0 transform translate-x-0 transition-all duration-1000 ease-out"
          :style="{ left: `calc(${Math.min(98, percent)}% - 12px)` }"
      >
        <div class="relative -top-4 z-[50]">
          <UIcon name="i-heroicons-heart" class="w-6 h-6 text-pink-700 drop-shadow-md animate-pulse"/>
        </div>
      </div>
    </div>

    <!-- Milestone markers -->
    <div class="relative h-6 mt-1">
      <div class="absolute left-1/4 transform -translate-x-1/2">
        <div class="h-3 w-1 bg-pink-200 mx-auto"></div>
        <span class="text-xs text-gray-500">25%</span>
      </div>
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <div class="h-3 w-1 bg-pink-200 mx-auto"></div>
        <span class="text-xs text-gray-500">50%</span>
      </div>
      <div class="absolute left-3/4 transform -translate-x-1/2">
        <div class="h-3 w-1 bg-pink-200 mx-auto"></div>
        <span class="text-xs text-gray-500">75%</span>
      </div>
      <div class="absolute right-0 transform -translate-x-1/2">
        <div class="h-3 w-1 bg-pink-200 mx-auto"></div>
        <span class="text-xs text-gray-500">100%</span>
      </div>
    </div>

    <!-- Motivational message -->
    <p class="text-center mt-4 text-pink-700 font-medium">
      <span v-if="total/objectif < 0.5">Chaque don compte pour atteindre notre objectif!</span>
      <span v-else-if="total/objectif < 0.75">Nous avançons! Continuons ensemble.</span>
      <span v-else-if="total/objectif < 1">Presque là! Aidez-nous à franchir la ligne d'arrivée.</span>
      <span v-else>Objectif atteint! Merci pour votre générosité.</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;
const cagnotte = useCookie<{ montant: number }>('cagnotte', {maxAge: 3600});
const total = ref(await fetchTotal());
const objectif = ref(2000);

const percent = computed(() => total.value ? (total.value / objectif.value * 100).toFixed(0) : 0);

async function fetchTotal() {
  let value;
  if (!cagnotte.value) {
    const {data} = await useLazyFetch(`${apiBaseUrl}/donations/total`);
    if (data && data.value) {
      value = data.value.total;
    } else {
      value = null;
    }
    cagnotte.value = {montant: value};
  } else {
    value = cagnotte.value.montant;
  }
  return value;
}

</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%) skewX(-30deg);
  }
  100% {
    transform: translateX(200%) skewX(-30deg);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
</style>