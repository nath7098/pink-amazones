<template>
  <nav class="relative flex flex-wrap justify-between items-center m-y-4 px-4 w-100 bg-white border-bottom-gray">
    <img src="/logo.png" alt="logo" class="md:size-[10rem] sm:size-[8rem] size-[5rem] rounded-full object-center" />
    <ULink to="/">
        <div class="lg:text-6xl md:text-5xl text-3xl text-black text-center font-molle"><span class="text-primary">Pink</span> Amazones</div>
    </ULink>
    <UButton class="md:hidden" variant="outline" @click="toggled = !toggled" ><UIcon name="i-heroicons-bars-3-16-solid" /></UButton>
    <div :class="['md:w-auto w-fit-content md:relative md:bottom-0 absolute bottom-[-4rem] right-0 bg-white z-[9999] md:p-0 p-4 md:border-0 border-2 rounded-lg md:block', !toggled && 'hidden']">
      <div class="flex flex-col shrink-1 md:flex-row md:gap-x-3 md:border-0 bg-sky">
        <ULink to="/projet" @click="toggled = false" inactive-class="text-black hover:text-primary" active-class="text-primary font-bold">Notre projet</ULink>
        <ULink to="/articles" @click="toggled = false" inactive-class="text-black hover:text-primary" active-class="text-primary font-bold">Articles</ULink>
      </div>
    </div>
  </nav>
  <div class="bg-white">
    <div class="relative">
      <slot />
      <UButton variant="solid" color="pink" size="lg" class="fixed left-[2rem] bottom-[2rem] inset-ring-2 shadow-lg shadow-pink-900/50">Faire un don !</UButton>
    </div>
  </div>
</template>
<script setup lang="ts">
const toggled = useState('toggled')
</script>

<style scoped>

</style>