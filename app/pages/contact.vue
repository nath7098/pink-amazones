<template>
  <div class="bg-gradient-to-b from-white to-pink-50 min-h-screen py-8">
    <!-- Contact information banner -->
    <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4 mb-8 bg-white rounded-lg shadow-md p-6">
      <UTooltip text="5 Rue du Commerce 37230 Pernay, France">
        <UButton @click="navigateTo('https://maps.app.goo.gl/Phn344rXTgipe2Kd7', {external: true, open: {target: '_blank'}})" variant="link" class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105">
          <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-pink-600"/>
          <div class="text-gray-800 font-medium">Pernay</div>
        </UButton>
      </UTooltip>
      <UButton
          @click="copyToClipboard('06 03 47 28 93')"
          variant="link"
          class="flex items-center gap-x-2 shrink-0 transition-transform hover:scale-105"
      >
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

    <!-- Form section -->
    <div v-if="false" class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div class="text-center mb-8">
        <h3 class="text-2xl md:text-3xl font-semibold text-pink-700">Entrer en contact</h3>
        <div class="my-4 flex justify-center">
          <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
        </div>
        <p class="text-gray-600">Nous sommes là pour répondre à vos questions et vous accompagner.</p>
      </div>

      <UForm
          :state="state"
          :schema="schema"
          @submit="onSubmit"
          class="space-y-6"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormGroup name="name" label="Nom">
            <UInput
                type="text"
                v-model="state.name"
                placeholder="Votre nom"
                icon="i-heroicons-user"
                required
            />
          </UFormGroup>

          <UFormGroup name="email" label="Email">
            <UInput
                type="email"
                v-model="state.email"
                placeholder="votre@email.com"
                icon="i-heroicons-envelope"
                required
            />
          </UFormGroup>
        </div>

        <UFormGroup name="subject" label="Sujet">
          <USelect
              v-model="state.subject"
              :options="subjectOptions"
              placeholder="Choisissez un sujet"
              required
          />
        </UFormGroup>

        <UFormGroup name="message" label="Message">
          <UTextarea
              v-model="state.message"
              placeholder="Écrivez votre message ici..."
              rows="5"
              required
          />
        </UFormGroup>

        <UFormGroup name="consent" class="flex items-start">
          <UCheckbox v-model="state.consent" name="consent">
            <p class="text-sm text-gray-600">
              J'accepte que mes données soient traitées conformément à la politique de confidentialité de l'association.
            </p>
          </UCheckbox>
        </UFormGroup>

        <div class="flex justify-center mt-6">
          <UButton
              variant="solid"
              color="pink"
              size="xl"
              class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
              type="submit"
              :loading="isSubmitting"
              :disabled="isSubmitting"
          >
            <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2"/>
            Envoyer
          </UButton>
        </div>
      </UForm>
    </div>

    <!-- Toast notification -->
    <UNotification v-if="false" v-model="notificationVisible" :timeout="3000" :color="notificationColor" class="max-w-md">
      <div class="flex items-center gap-2">
        <UIcon :name="notificationIcon" class="w-5 h-5" />
        <span>{{ notificationMessage }}</span>
      </div>
    </UNotification>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod';

// Page metadata
definePageMeta({
  title: 'Contactez-nous',
  catchLine: 'Nous sommes là pour répondre à vos questions'
});

// Form state
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};

const state = ref<FormState>({
  name: '',
  email: '',
  subject: '',
  message: '',
  consent: false
});

// Subject options
const subjectOptions = [
  { label: 'Demande d\'information', value: 'information' },
  { label: 'Faire un don', value: 'donation' },
  { label: 'Devenir bénévole', value: 'volunteer' },
  { label: 'Événements', value: 'events' },
  { label: 'Autre', value: 'other' }
];

// Form validation schema
const schema = z.object({
  name: z.string().min(2, 'Veuillez entrer votre nom'),
  email: z.string().email('Veuillez entrer un email valide'),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Votre message doit contenir au moins 10 caractères'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' })
  })
});

// Form submission
const isSubmitting = ref(false);
const notificationVisible = ref(false);
const notificationMessage = ref('');
const notificationColor = ref('');
const notificationIcon = ref('');

const onSubmit = async () => {
  try {
    isSubmitting.value = true;

    // Simulating API call with useFetch
    // Replace with your actual API endpoint
    const { data, error } = await useFetch('/api/contact', {
      method: 'POST',
      body: state.value
    });

    if (error.value) {
      throw new Error('Une erreur est survenue lors de l\'envoi du message');
    }

    // Reset form after successful submission
    state.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
      consent: false
    };

    // Show success notification
    showNotification('Votre message a été envoyé avec succès. Nous vous répondrons dès que possible.', 'green', 'i-heroicons-check-circle');
  } catch (error) {
    // Show error notification
    showNotification('Une erreur est survenue. Veuillez réessayer plus tard.', 'red', 'i-heroicons-exclamation-circle');
  } finally {
    isSubmitting.value = false;
  }
};

// Show notification helper
const showNotification = (message: string, color: string, icon: string) => {
  notificationMessage.value = message;
  notificationColor.value = color;
  notificationIcon.value = icon;
  notificationVisible.value = true;
};

// Copy to clipboard function
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  showNotification('Numéro de téléphone copié dans le presse-papier', 'blue', 'i-heroicons-clipboard-document-check');
};
</script>

<style scoped>
.bg-gradient-to-b {
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>