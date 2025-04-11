<template>
  <div>
    <div class="m-4">
      <UButton variant="link"
               size="xl"
               icon="i-heroicons-arrow-left-solid"
               class="relative group hover:no-underline py-3 md:py-2 group overflow-hidden transition-all duration-300"
               @click="goBack">
        Retour
        <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </UButton>

    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.back();
}
</script>