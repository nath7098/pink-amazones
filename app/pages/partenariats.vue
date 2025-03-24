<template>
  <div class="container mx-auto px-4 py-16">
    <!-- Introduction Section -->
    <div class="max-w-4xl mx-auto text-center mb-16 mt-6">
      <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
        Pink Amazones s'associe avec des professionnels de confiance pour vous offrir des services adaptés
        à vos besoins. Découvrez nos partenariats exclusifs et profitez d'avantages réservés à nos adhérentes.
      </p>
      <div class="my-8 flex justify-center">
        <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
      </div>
    </div>

    <!-- Partenaires Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Nos partenaires
        <pink-undeline />
      </h2>

      <!-- Flor & Sens Partnership Card -->
      <pink-partenaire :partenaire="florEtSens">
        <template #text>
          <p class="mb-4 font-medium text-lg text-pink-700">
            Chères adhérentes,
          </p>
          <p class="mb-4">
            L'équipe Pink Amazones a le plaisir de vous annoncer un partenariat avec <strong>Flor & Sens</strong> !
            Grâce à cette collaboration, vous bénéficiez d'une remise exclusive de <strong>-10%</strong> sur tous les massages.
          </p>
          <p class="mb-4">
            Le cabinet Flor & Sens, situé à Saint-Roch, est un véritable havre de détente, dédié aux soins
            ressourçants et personnalisés. Vous y redécouvrirez l'art du massage et ses nombreux bienfaits.
          </p>
          <p class="mb-4">
            Laissez-vous guider par les mains expertes de Floriane Bonneau et ouvrez la porte de votre univers intérieur,
            pour un moment de bien-être unique.
          </p>
        </template>
      </pink-partenaire>

      <!-- Alexandra Pays Partnership Card -->
      <pink-partenaire :partenaire="alequilibre">
        <template #text>
          <p class="mb-4">
            Nous savons combien il peut être difficile de concilier cancer, traitements et alimentation.
          </p>
          <p class="mb-4">
            C'est pourquoi l'association Pink Amazones a mis en place un partenariat avec Alexandra Pays,
            nutritionniste et diététicienne diplômée.
          </p>
          <p class="font-semibold text-teal-700 text-lg mt-6 mb-2">Elle propose aux membres de notre association :</p>

          <div class="mb-6">
            <h4 class="font-semibold mb-2">Un tarif préférentiel pour un suivi diététique individuel :</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li class="flex items-baseline">
                <span class="font-medium">49 € le premier bilan</span>
                <span class="text-gray-500 text-sm ml-2">(au lieu de 52 €)</span>
              </li>
              <li class="flex items-baseline">
                <span class="font-medium">32 € les consultations de suivi</span>
                <span class="text-gray-500 text-sm ml-2">(au lieu de 35 €)</span>
              </li>
            </ul>
          </div>

          <div class="mb-4 bg-teal-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Un atelier diététique par semestre</h4>
            <p>
              Pour vous accompagner dans une alimentation adaptée à vos besoins,
              en toute bienveillance.
            </p>
          </div>
        </template>
      </pink-partenaire>

      <pink-partenaire :partenaire="crabette">
        <template #text>
          <p class="mb-4 font-medium text-lg text-pink-700">
            Chères adhérentes,
          </p>
          <p class="mb-4">
            En tant qu’association collectrice en partenariat avec <strong>Crabette</strong>, nous mettons en place une collecte d’accessoires liés au cancer du sein que vous n’utilisez plus :
            <strong class="text-pink-600">perruques, prothèses, foulards, bonnets, gaines et soutiens-gorge post-opératoires, soutiens-gorge
              pour
              prothèses externes, etc</strong>.
          </p>
          <p class="mb-4">
            L’objectif de cette collecte est de donner une seconde vie à ces accessoires tout en permettant à d’autres femmes touchées par le cancer du sein de s’équiper à petits prix.
          </p>
          <p class="mb-4">
            Vous pourrez déposer vos dons dans un carton prévu à cet effet, directement à la <strong>Mairie de Pernay</strong> (qui accepte d'être notre poinnt de collecte solidaire).
          </p>
          <p class="mb-4">
            Les accessoires récoltés seront ensuite transmis à Crabette, qui se chargera de les remettre en vente à tarif solidaire.
          </p>
          <strong class="mb-4 text-pink-600 text-xl">
            Parce que chaque geste compte…
          </strong>
          <p class="mb-4">
            Aujourd’hui, nous avons besoin de vous. Votre soutien peut transformer des vies, faire avancer notre cause et créer un véritable impact.
          </p>
          <p class="mb-4">
            Merci d’avance pour vos dons et votre générosité.<br />
            Votre contribution n’est pas seulement un don, c’est un acte fort, un engagement, un message d’espoir.
          </p>
          <p class="mb-4"></p>
        </template>
      </pink-partenaire>
    </div>

    <!-- Call to Action Section -->
    <div class="max-w-4xl mx-auto bg-pink-50 rounded-xl shadow-md p-8 mb-16">
      <div class="flex flex-col md:flex-row md:items-center gap-6">
        <div class="md:w-2/3">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
            Vous êtes professionnel·le ?
            <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
          </h2>
          <p class="text-gray-700 mb-4">
            Vous souhaitez soutenir notre cause et proposer vos services à nos adhérentes ?
            Contactez-nous pour discuter d'un potentiel partenariat !
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
            <UIcon name="i-lucide-heart-handshake" class="w-5 h-5 mr-1"/>
            Devenir partenaire
          </UButton>
        </div>
      </div>
    </div>

    <!-- Membership CTA -->
    <div class="text-center max-w-4xl mx-auto mb-16">
      <p class="text-2xl font-bold text-pink-700 mb-8">
        Rejoignez-nous pour profiter de ces avantages et bien plus encore
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <UButton
            variant="solid"
            color="pink"
            size="xl"
            class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/adhesion"
        >
          <UIcon name="i-heroicons-user-plus" class="w-5 h-5 mr-2"/>
          Devenir membre
        </UButton>

        <UButton
            variant="outline"
            color="pink"
            size="xl"
            class="rounded-full shadow-md transform transition-transform hover:scale-105 hover:-translate-y-1"
            to="/contact"
        >
          <UIcon name="i-heroicons-information-circle" class="w-5 h-5 mr-2"/>
          Plus d'informations
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import PinkUndeline from '~/components/decoratives/pink-undeline.vue';
import PinkPartenaire from '~/components/pink-partenaire.vue';

definePageMeta({
  title: 'Nos Partenariats',
  catchLine: 'Des avantages exclusifs pour nos adhérentes'
});

const florEtSens = ref({
  image: '/img/partenaires/flor-et-sens.png',
  alt: 'Flor & Sens',
  name: 'Pink Amazones x Flor & Sens',
  description: 'Massages bien-être adaptés',
  reduction: '-10% pour nos adhérentes',
  website: 'massage-flor-et-sens.fr',
  contactName: 'Floriane Bonneau',
  phone: '0670792353',
  mail: 'floriane.massage@gmail.com',
  location: 'Saint-Roch, Tours'
});

const alequilibre = ref({
  image: '/img/partenaires/alequilibre.png',
  alt: 'Alequilibre',
  name: 'Pink Amazones x Alequilibre',
  description: 'Diététicienne Nutritionniste',
  reduction: 'Tarifs préférentiels',
  website: 'alequilibre37.com',
  contactName: 'Alexandra PAYS',
  diploma: 'Diététicienne - Nutritionniste',
  phone: '0680363354',
  mail: 'alexandra.pays@alequilibre37.com',
  location: 'A domicile, Tours Nord',
});

const crabette = ref({
  image: '/img/partenaires/crabette.jpg',
  alt: 'Crabette',
  name: 'Pink Amazones x Crabette',
  description: 'Collecte solidaire d’accessoires liés au cancer du sein',
  website: 'crabette.fr',
  instagram: 'www.instagram.com/delphine_crabette/',
  location: 'Point de collecte - Mairie de PERNAY',
})

</script>