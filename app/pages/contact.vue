<template>
  <div class="bg-gradient-to-b from-white to-pink-50 min-h-screen">

    <div class="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-4 mb-8 bg-white rounded-lg shadow-md p-4">
      <UTooltip text="5 Rue du Commerce 37230 Pernay, France">
        <UButton @click="navigateTo('https://maps.app.goo.gl/Phn344rXTgipe2Kd7', {external: true, open: {target: '_blank'}})" variant="link" class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
          <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-pink-600"/>
          <div class="text-gray-800 font-medium">Pernay</div>
        </UButton>
      </UTooltip>
      <UButton variant="link" class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
        <UIcon name="i-heroicons-phone" class="w-6 h-6 text-pink-600"/>
        <div class="text-gray-800 font-medium">06 03 47 28 93</div>
      </UButton>
      <UButton @click="navigateTo('https://www.facebook.com/profile.php?id=61568564020412', {external: true, open: {target: '_blank'}})" variant="link" class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
        <UIcon name="i-uil-facebook-f" class="w-6 h-6 text-pink-600"/>
        <div class="text-gray-800 font-medium">@Association Pink Amazones</div>
      </UButton>
      <UButton @click="navigateTo('https://www.instagram.com/pink_amazones/?igsh=NGFzZTE5MHIIZ2J4#', {external: true, open: {target: '_blank'}})" variant="link" class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
        <UIcon name="i-uil-instagram" class="w-6 h-6 text-pink-600"/>
        <div class="text-gray-800 font-medium">pink_amazones</div>
      </UButton>
    </div>

    <div class="max-w-2xl mx-auto text-center mb-16 mt-6">
      <h3 class="text-2xl md:text-3xl font-semibold text-pink-700 mb-6">Entrer en contact</h3>
      <div class="my-8 flex justify-center">
        <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
      </div>

      <UForm :state="state" class="space-y-4">
        <UFormGroup name="name" label="Nom">
          <UInput type="text" v-model="state.name" placeholder="Votre nom" required/>
        </UFormGroup>

        <UFormGroup name="email" label="Email">
          <UInput type="email" v-model="state.email" placeholder="votre@email.com" required/>
        </UFormGroup>
        <UFormGroup name="message" label="Message">
          <UTextarea v-model="state.message" placeholder="Votre message" required/>
        </UFormGroup>

        <UButton
            variant="solid"
            color="pink"
            size="xl"
            class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
            type="submit"
        >
          <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2"/>
          Envoyer
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add any form-handling logic or composables here if needed
definePageMeta({
  title: 'Contactez-nous',
  catchLine: 'Nous sommes là pour répondre à vos questions'
});

type PinkState = {
  name: string;
  email: string;
  message: string;
};

const state = ref<PinkState>({
  name: '',
  email: '',
  message: '',
})
</script>

<style scoped>
/* Add any extra styles if required */
</style>
