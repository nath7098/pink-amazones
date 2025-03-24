<template>
  <div class="container mx-auto px-4 py-16">
    <!-- Introduction Section -->
    <div class="max-w-4xl mx-auto text-center mb-16 mt-6">
      <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
        Découvrez l'équipe Pink Amazones, des femmes engagées dans la lutte contre le cancer du sein
        et unies par un même combat. Notre force réside dans nos parcours personnels et notre détermination
        à soutenir celles qui traversent cette épreuve.
      </p>
      <div class="my-8 flex justify-center">
        <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
      </div>
    </div>

    <!-- Team Members Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Nos membres fondatrices
        <pink-undeline />
      </h2>

      <!-- Linda Martins - Présidente -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12 transform transition hover:shadow-xl">
        <div class="md:flex">
          <!-- Left side with image and basic info -->
          <div class="md:w-2/5 bg-pink-50 p-6 flex flex-col justify-center items-center">
            <div class="rounded-full bg-white p-4 mb-6 shadow-md">
              <img src="/img/equipe/linda-martins.png" alt="Linda Martins" class="w-[20rem] h-[20rem] object-cover rounded-full" />
            </div>
            <h3 class="text-2xl font-bold text-pink-600 mb-3 text-center">Linda Martins</h3>
            <p class="text-gray-600 text-center font-medium mb-4">Présidente</p>
            <div class="flex items-center bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-bold mb-4">
              <UIcon name="i-heroicons-book-open" class="w-5 h-5 mr-2"/>
              <span>Autrice de "Au-delà du cancer"</span>
            </div>
          </div>

          <!-- Right side with detailed info -->
          <div class="md:w-3/5 p-8">
            <div class="prose max-w-none">
              <p class="mb-4 font-medium text-lg text-pink-700">
                Pink Amazones – Quand le combat devient une mission de vie.
              </p>
              <p class="mb-4">
                Je m'appelle Linda Martins, j’ai 42 ans, je suis maman de deux petites filles.
                En décembre 2020, le mot que personne ne veut entendre est tombé : cancer du sein hormonodépendant.
                J’avais 38 ans. Mes filles avaient 4 et 6 ans.
              </p>
              <p class="mb-4">
                Pas de boule, pas de douleur. Juste une fatigue intense… et un saignement du mamelon, ce symptôme si rare qu’il ne représente que 10 % des cas.
                Mais au fond de moi, je savais.
              </p>
              <p class="mb-4">
                Il a fallu six mois pour poser un diagnostic. Et puis tout s’est enchaîné : mastectomie, radiothérapie, hormonothérapie pour 10 ans, le tout seule, sans accompagnement, en pleine crise COVID.
                J’ai aussi découvert que j’étais porteuse du gène BRCA2.
              </p>
              <p class="mb-4">
                J’ai voulu me battre. Me relever. Être forte. Trop forte peut-être…
                J’ai mis mes émotions de côté, j’ai mis mes proches à distance.
                Et un jour, mon mari de l’époque m’a dit : « Tu as pris le TGV pour Marseille, et moi je suis resté sur le quai… »
              </p>
              <p class="mb-4">
                On parle des traitements, des opérations, de la douleur.
                Mais on ne parle pas assez de l’après.
                Du vide. De la peur. De la solitude. Du corps qui change. De l’âme qui vacille.
                De cette vie qui ne sera plus jamais comme avant.
              </p>
              <p class="mb-4">
                Alors j’ai décidé de transformer ce combat en quelque chose de plus grand.
                Pendant deux années, j’ai organisé des événements Octobre Rose, reversé des fonds, écrit mon témoignage dans un livre.
              </p>
              <p class="mb-4">
                Mais ce n’était pas assez.
                Il fallait agir, accompagner, rassembler, soutenir.
              </p>
              <p class="mb-4 text-pink-600">
                C’est ainsi qu’est née l’association Pink Amazones.
              </p>
              <p class="mb-4">
                Une association pour celles et ceux qui traversent cette épreuve.
                Une association pour les aidants, trop souvent oubliés.
                Une association pour redonner du sens, de l’énergie, du lien, de la force.
              </p>
              <p class="mb-4">
                Je ne suis pas médecin, je ne suis pas psychologue.
                Je suis une femme qui a vécu le choc, la peur, la douleur, la solitude… et qui a décidé de tendre la main à ceux qui en ont besoin.
              </p>
              <p class="mb-4 text-pink-600">
                Avec Pink Amazones, vous ne serez plus jamais seul(e).
                Vous trouverez un espace de partage, d’écoute, de soutien, de bienveillance.
              </p>
              <p class="italic text-pink-600 font-medium">
                Car oui, on peut renaître après un cancer.
                Mais on renaît plus fort quand on n’est pas seul.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Laurence Fontaine Moreau - Vice-Présidente -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12 transform transition hover:shadow-xl">
        <div class="md:flex">
          <!-- Left side with image and basic info -->
          <div class="md:w-2/5 bg-pink-50 p-6 flex flex-col justify-center items-center">
            <div class="rounded-full bg-white p-4 mb-6 shadow-md">
              <img src="/img/equipe/laurence-fontaine-moreau.jpg" alt="Laurence Fontaine Moreau" class="w-[20rem] h-[20rem] object-cover rounded-full" />
            </div>
            <h3 class="text-2xl font-bold text-pink-600 mb-3 text-center">Laurence Fontaine Moreau</h3>
            <p class="text-gray-600 text-center font-medium mb-4">Vice-Présidente</p>
            <div class="flex items-center bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-bold mb-4">
              <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2"/>
              <span>Porteuse du gène BRCA1</span>
            </div>
          </div>

          <!-- Right side with detailed info -->
          <div class="md:w-3/5 p-8">
            <div class="prose max-w-none">
              <p class="mb-4 font-medium text-lg text-pink-700">
                Bonjour à vous tous, malades en traitement ou non, familles, amis, soignants et toutes personnes concernées de près ou de loin par cette maladie du Cancer.
              </p>
              <p class="mb-4">
                Je m'approche de vous aujourd'hui via notre association pour d'une part me présenter mais aussi témoigner en tant que malade mais pas seulement de ce combat que j'ai dû mener et d'une certaine manière que je mène au quotidien depuis toujours.
              </p>
              <p class="mb-4">
                Effectivement pour ma part, je n'ai pas pris cette maladie en pleine face à l'aube de mes 50 ans car malheureusement dès ma plus tendre enfance au plus loin que je me souvienne, elle avait une place et ce depuis toujours au sein notre famille. Était ce la faute à « pas de chance » ? Ou une famille à risque ? Tout ce questionnement que mes parents, grands-parents, oncles tantes évoquaient régulièrement ont enfin eu réponse à l'année 2010 et cette réponse avait un nom « mutation BRCA1 » !
              </p>
              <p class="mb-4">
                À l'aube de mes 50 ans j'ai rejoint le clan des malades c'était mon tour ! Grosse chimiothérapie pour pouvoir m'opérer puis double mastectomie et pour finir radiothérapie. Et vraiment le combat devient très différent, très compliqué et surtout nous oblige à faire le deuil de notre « moi » d'avant car l'évidence est qu'il y a une fin à accepter au delà de la survie !
              </p>
              <p class="italic text-pink-600 font-medium">
                "Je veux être là pour vous dans vos moments de guerre, de souffrance, de doute mais aussi de retour à cette nouvelle vie si particulière qui vous attend avec son lot de déception, de bonheur retrouvé et surtout d'espoir!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Team Members -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Les autres membres du bureau
        <pink-undeline />
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Florian - Trésorier -->
        <pink-bureau-member name="Florian Gallou" post="Trésorier" image="/img/equipe/florian-gallou.png">
          <template #default>
            <div>Je m'appelle Florian, trésorier de l'association Pink Amazones.</div>
            <div>Mais avant tout, je suis le conjoint de Linda.</div>
            <div>Mon rôle dans l’association ? Eh bien, je jongle avec les chiffres tout en étant un soutien infaillible
              pour Linda, à qui je dois parfois rappeler où elle a mis ses clés (ou son téléphone, ou son agenda… vous
              voyez le genre). Je m'investis dans cette belle aventure, non seulement par amour pour elle, mais aussi
              par amour des gens et de tout ce que cette association représente : solidarité, entraide et une bonne dose
              de rires partagés.</div>
            <div>Parce qu’au fond, derrière chaque projet, il y a une équipe (et parfois un homme avec une
              calculette).</div>
          </template>
        </pink-bureau-member>

        <!-- Ambroisine - Secrétaire -->
        <pink-bureau-member name="Ambroisine Dissakalou" post="Secrétaire" image="/img/equipe/ambroisine-dissakalou.png">
          <div>Je suis Ambroisine, secrétaire de l'association.</div>
          <div>
            J’ai choisi de m’investir dans ce groupe car l’histoire de Linda m’a profondément émue. Ayant moi-même vécu
            de près le cancer à travers mon amie Laurence, je n’ai pas hésité une seconde : je me suis sentie immédiatement concernée.
          </div>
          <div>
            En tant que soignante dans un service accueillant des pathologies similaires, je sais à quel point il est
            difficile de faire face à la maladie, surtout lorsqu’on est seule.
          </div>
          <div>Et puis, au fond, nous sommes toutes et tous concerné(e)s.</div>
          <div>Quand on peut donner un peu de son temps pour une bonne cause, il ne faut pas hésiter — c’est une évidence pour moi.</div>
        </pink-bureau-member>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="max-w-4xl mx-auto bg-pink-50 rounded-xl shadow-md p-8 mb-16">
      <div class="flex flex-col md:flex-row md:items-center gap-6">
        <div class="md:w-2/3">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
            Rejoignez-nous dans ce combat
            <pink-undeline />
          </h2>
          <p class="text-gray-700 mb-4">
            Vous aussi, vous êtes concernée par le cancer du sein ? Vous souhaitez rejoindre une communauté
            bienveillante et solidaire ? N'hésitez pas à prendre contact avec nous.
          </p>
        </div>
        <div class="md:w-1/3 flex justify-center">
          <UButton
              variant="solid"
              color="pink"
              size="lg"
              class="rounded-full shadow-md transform transition-transform hover:scale-105"
              to="/contact"
          >
            <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-1"/>
            Contactez-nous
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PinkUndeline from '~/components/decoratives/pink-undeline.vue';
import PinkBureauMember from '~/components/pink-bureau-member.vue';

definePageMeta({
  title: 'Notre Équipe',
  catchLine: 'Des femmes engagées dans la lutte contre le cancer du sein'
})
</script>