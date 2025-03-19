<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UModals />
</template>

<style>
.page-enter-active, .page-leave-active {
  transition: all .4s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
