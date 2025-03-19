<template>
  <!-- Enhanced navigation with ribbon and shadow effects -->
  <nav class="relative flex flex-wrap justify-between items-end px-4 w-full bg-white border-b border-pink-100 shadow-sm py-2">
    <!-- Logo with subtle glow effect -->
    <div class="relative">
      <div class="absolute -inset-1 bg-pink-100 rounded-full blur-md opacity-70"></div>
      <img src="/logo.png" alt="logo" class="md:size-[10rem] sm:size-[8rem] size-[5rem] rounded-full object-center relative z-10" />
    </div>

    <!-- Title with enhanced styling -->
    <div class="absolute left-1/2 translate-x-[-50%] top-[.5rem]" >
      <div class="lg:text-6xl md:text-5xl text-3xl text-black text-center font-molle">
        <span class="text-primary relative">
          Pink
          <span class="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </span>
        Amazones
      </div>
    </div>

    <!-- Mobile menu toggle with improved styling -->
    <UButton
        class="md:hidden bg-white hover:bg-pink-50 text-pink-600 border border-pink-200 shadow-sm"
        @click="toggled = !toggled"
    >
      <UIcon name="i-heroicons-bars-3-16-solid" class="w-6 h-6" />
    </UButton>

    <!-- Enhanced navigation menu -->
    <div
        :class="[
        'md:w-auto w-fit-content md:relative md:bottom-0 absolute md:translate-y-0 translate-y-full right-4 bg-white z-[10] md:p-0 md:mb-5 mb-0 p-4 md:border-0 border border-pink-200 rounded-lg md:block shadow-lg md:shadow-none transition-all duration-300',
        !toggled && 'hidden',
      ]"
    >
      <div class="flex flex-col shrink-1 md:flex-row md:gap-x-5 lg:gap-x-8 md:border-0">
        <ULink
            v-for="(item, index) in [
            { to: '/', label: 'Accueil' },
            { to: '/evenements', label: 'Nos événements' },
            { to: '/adhesion', label: 'Adhésion' },
            { to: '/don', label: 'Don' },
            { to: '/about', label: 'À propos' },
            { to: '/photos', label: 'Photos' },
            { to: '/contact', label: 'Nous contacter' }
          ]"
            :key="index"
            :to="item.to"
            @click="toggled = false"
            class="relative py-2 md:py-1 group overflow-hidden transition-colors duration-300"
            inactive-class="text-gray-700 hover:text-primary"
            active-class="text-primary font-bold"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </ULink>
      </div>
    </div>
  </nav>

  <!-- Main content area with subtle background -->
  <div class="bg-gradient-to-b from-white to-pink-50 min-h-screen">
    <div class="relative">
      <!-- Decorative ribbon element at the top -->
      <div class="h-1 w-full bg-gradient-to-r from-pink-100 via-pink-500 to-pink-100"></div>

      <!-- Main content -->
      <NuxtLayout name="hero">
        <slot/>
      </NuxtLayout>

      <!-- Enhanced donation button with animation -->
      <UButton
          variant="solid"
          color="pink"
          size="xl"
          class="fixed left-[2rem] bottom-[2rem] shadow-lg shadow-pink-900/30 rounded-full transform transition-transform hover:scale-105 hover:-translate-y-1 z-50 animate-pulse"
          @click="navigateTo('/donation')"
      >
        <span class="flex items-center gap-x-2">
          <UIcon name="i-heroicons-heart" class="w-5 h-5" />
          Faire un don !
        </span>
      </UButton>
    </div>
  </div>

  <!-- Footer (new addition) -->
  <footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <div class="font-molle text-2xl mb-2"><span class="text-primary">Pink</span> Amazones</div>
          <p class="text-gray-400">Ensemble contre le cancer du sein</p>
        </div>

        <div class="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61568564020412" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-colors">
            <UIcon name="i-uil-facebook-f" class="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/pink_amazones/?igsh=NGFzZTE5MHIIZ2J4#" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-colors">
            <UIcon name="i-uil-instagram" class="w-5 h-5" />
          </a>
          <a href="mailto:pinkamazones37@gmail.com" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-colors">
            <UIcon name="i-uil-envelope" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="h-10 w-20 bg-pink-600 rounded-t-full"></div>
      </div>
      <div class=" pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
        © 2025 Association Pink Amazones - Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const toggled = useState('toggled');
</script>

<style scoped>
/* Animation for the donation button */
@keyframes gentle-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 10px 15px -3px rgba(157, 23, 77, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 15px 20px -3px rgba(157, 23, 77, 0.4);
  }
}

.animate-pulse {
  animation: gentle-pulse 4s infinite ease-in-out;
}
</style>