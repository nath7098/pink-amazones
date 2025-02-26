<template>
  <div class="container mx-auto px-4 py-16">

    <!-- Founder's Story Section -->
    <pink-card title="De l'épreuve à la solidarité : la naissance de Pink Amazones">
        <p class="mb-4">En décembre 2020, à l'âge de 38 ans, j'ai été diagnostiquée d'un cancer du sein. Porteuse du gène BRCA2, un héritage génétique qui augmente le risque de développer un cancer du sein, je me suis retrouvée face à une épreuve aussi brutale qu'inattendue. Entre traitements, doutes et combats quotidiens, j'ai découvert une force en moi que je ne soupçonnais pas.</p>
        <p class="mb-4">Au fil des quatre années qui ont suivi mon diagnostic, j'ai eu l'opportunité de rencontrer d'autres femmes touchées par cette maladie, venues de toutes les régions, de tous les horizons. Chaque échange, chaque témoignage m'a rappelé à quel point nous étions nombreuses à traverser ce même combat, chacune avec son histoire, ses craintes et son courage.</p>
        <p class="mb-4">Il y a quelque temps, dans un lieu comme un autre, une simple rencontre a transformé ma vie et celle de nombreuses autres personnes. C'était à la salle de sport, un endroit où je cherchais à retrouver une forme physique après ma rémission d'un cancer du sein. Un jour, en croisant le regard d'une autre femme, Laurence, j'ai ressenti immédiatement une connexion particulière. Elle aussi avait traversé cette épreuve et, elle portait le gène BRCA1.</p>
        <p class="mb-4">Ce n'était pas juste une rencontre fortuite, mais un tournant dans nos vies respectives. Nous avons partagé nos histoires, nos peurs, nos espoirs, et, surtout, l'envie de donner un sens à notre combat.</p>
        <p class="mb-4">C'est ainsi que nous avons fondé Pink Amazones, une association dédiée aux femmes touchées par le cancer du sein, et en particulier celles porteuses du gène BRCA.</p>
    </pink-card>

    <!-- Mission Section -->
    <pink-card title="Notre mission">
        <p class="mb-4">Notre mission : créer un espace d'écoute, d'entraide et de partage, sensibiliser à l'importance du dépistage et encourager la reconstruction, tant physique que mentale, après la maladie.</p>
        <p class="mb-4">Notre objectif : offrir une oreille attentive, des ressources, mais aussi diffuser un message d'espoir, de résilience et de solidarité.</p>
    </pink-card>

    <!-- Why Pink Amazones Section -->
    <pink-card title="Pourquoi Pink Amazones ?" ribbon ribbon-title="Solidarité">
      <p class="mb-4">Parce que nous voulons que chaque femme qui traverse cette épreuve se sente soutenue et valorisée.</p>
      <p class="mb-4">Parce que nous savons qu'au-delà de la maladie, ce sont les liens, les partages et les histoires communes qui nous aident à aller de l'avant. Pink Amazones n'est pas juste une association, c'est un symbole de force, de courage et de rémission.</p>
      <p class="mb-4">Parce que derrière chaque diagnostic, il y a une femme, une famille, une histoire. Et parce qu'ensemble, nous sommes plus fortes.</p>
      <p class="mb-4 font-bold">Ensemble, nous ferons de belles choses</p>
      <p class="mb-4 font-medium">Linda Martins et l'équipe Pink Amazones</p>
    </pink-card>

    <!-- Objectives Section -->
    <pink-card title="Nos Objectifs">
      <p class="text-gray-700 mb-6">L'association PINK AMAZONES a pour objectifs de :</p>
      <template #list>
        <ul class="space-y-4 text-gray-700 mb-8">
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
            </div>
            <p>Participer et promouvoir des initiatives de prévention et de sensibilisation au dépistage et aux problèmes liés au cancer du sein, tant pour les personnes malades que pour leurs proches</p>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
            </div>
            <p>Transmettre son expérience en tant qu'exemple pour les malades de cancer</p>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
            </div>
            <p>Partager ses connaissances réseaux pour accompagner au mieux les malades pendant leurs parcours de soins</p>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
            </div>
            <p>Être un soutien au corps et à l'esprit, pour les malades du cancer, les personnes en rémission, ainsi qu'à leurs proches</p>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
            </div>
            <p>Réaliser des évènements et collectes de dons</p>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-pink-500 mr-2">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
            </div>
            <p>Engager des actions qui ont vocation à créer une dynamique d'espoir</p>
          </li>
        </ul>
      </template>
    </pink-card>

    <!-- Call to Action -->
    <div class="text-center max-w-4xl mx-auto mb-16">
      <p class="text-2xl font-bold text-pink-700 mb-8">Rejoignez-nous dans ce combat</p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <UButton
            variant="solid"
            color="pink"
            size="xl"
            class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/don"
        >
          <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2" />
          Faire un don
        </UButton>

        <UButton
            variant="outline"
            color="pink"
            size="xl"
            class="rounded-full shadow-md transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/adhesion"
        >
          <UIcon name="i-heroicons-user-plus" class="w-5 h-5 mr-2" />
          Devenir membre
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'À Propos de Pink Amazones',
  catchLine: 'Notre histoire et notre mission'
})
</script>

<style scoped>
.shadow-text {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>