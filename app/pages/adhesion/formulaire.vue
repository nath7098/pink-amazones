<template>
  <NuxtLayout name="frame">
    <div class="iframe-container">
      <div v-if="!loaded" class="absolute inset-0 m-x-auto m-y-0">
        <donation-skeleton />
      </div>
      <iframe id="haWidget"
              allowtransparency="true"
              scrolling="no"
              :src="iFrameUrl"
              style="width: 100%; height: 750px; border: none; overflow: hidden;"
              :style="{ display: loaded ? 'block' : 'none' }"
      ></iframe>
    </div>

  </NuxtLayout>
</template>

<script setup lang="ts">
import DonationSkeleton from '~/components/skeleton/DonationSkeleton.vue';

definePageMeta({
  layout: false,
});

const loaded = ref(false);
const iFrameUrl = useRuntimeConfig().public.helloAsso.adhesion;

onMounted(() => {
  window.addEventListener('message', (event) => {
    // Check if message is from HelloAsso
    if (event.origin.includes('helloasso')) {
      loaded.value = true;
    }
  });
});

</script>

<style scoped>
.iframe-container {
  width: 90vw;
  height: 1064px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
</style>