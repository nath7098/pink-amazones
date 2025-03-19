<template>
  <div class="container mx-auto px-4 py-16">
    <!-- Introduction Section -->
    <div class="max-w-4xl mx-auto text-center mb-16 mt-6">
      <h3 class="text-2xl md:text-3xl font-semibold text-pink-700 mb-6">Rejoignez notre lutte contre le cancer du sein</h3>
      <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
        Le cancer du sein touche des milliers de femmes chaque année, mais chaque geste de soutien peut faire une réelle différence.
        En adhérant à notre association, vous devenez acteur d'un changement essentiel. Ensemble, nous pouvons offrir plus qu'un simple espoir :
        nous pouvons fournir des ressources, du soutien, et un véritable accompagnement aux personnes touchées par cette maladie.
      </p>
      <div class="my-8 flex justify-center">
        <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
      </div>
    </div>

    <pink-members />

    <!-- Why Join Section -->
    <div class="max-w-5xl mx-auto mb-16 mt-16">
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
            Pourquoi adhérer ?
            <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
          </h2>

          <p class="text-gray-700 mb-6">En devenant membre de notre association, vous contribuez à :</p>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-pink-50 p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow">
              <div class="flex items-center mb-4">
                <UIcon name="i-heroicons-user-group" class="w-8 h-8 text-pink-600 mr-3"/>
                <h3 class="font-bold text-gray-800">Communauté</h3>
              </div>
              <p class="text-gray-700">Créer une communauté forte et solidaire, prête à se mobiliser ensemble pour une cause qui nous touche tous.</p>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow">
              <div class="flex items-center mb-4">
                <UIcon name="i-heroicons-heart" class="w-8 h-8 text-pink-600 mr-3"/>
                <h3 class="font-bold text-gray-800">Soutien</h3>
              </div>
              <p class="text-gray-700">Apporter du soutien aux malades et à leurs proches à travers des programmes d'écoute et d'accompagnement.</p>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow">
              <div class="flex items-center mb-4">
                <UIcon name="i-heroicons-megaphone" class="w-8 h-8 text-pink-600 mr-3"/>
                <h3 class="font-bold text-gray-800">Sensibilisation</h3>
              </div>
              <p class="text-gray-700">Sensibiliser et informer sur les gestes de prévention, essentiels pour lutter efficacement contre cette maladie.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Make a Difference Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <div class="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl shadow-md overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
            Comment votre soutien fait la différence ?
            <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
          </h2>

          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="md:w-1/2">
              <p class="text-gray-700 mb-4">
                Chaque membre a un rôle clé à jouer. Votre implication, même modeste, permet à notre association de mener à bien des actions concrètes :
                des campagnes de sensibilisation, des collectes de fonds, des événements de soutien et bien plus encore.
              </p>
              <p class="text-gray-700 font-medium">
                Vous ne vous contentez pas de faire partie d'une cause, vous devenez un acteur de changement.
              </p>
            </div>

            <div class="md:w-1/2 relative group">
              <div data-blur class="absolute -inset-1 bg-pink-300 rounded-xl blur-xl z-[90] opacity-0 group-hover:opacity-40 transition delay-150 duration-300 ease-out"></div>
              <div class="bg-white p-6 rounded-lg shadow-md relative z-[100]">
                <h3 class="font-bold text-xl text-pink-600 mb-4">Rejoignez-nous aujourd'hui</h3>
                <p class="text-gray-700 mb-6">Ensemble, nous avons la force de faire la différence.</p>
                <UButton
                    @click="goToAdhesion"
                    variant="solid"
                    color="pink"
                    size="lg"
                    class="w-full rounded-full shadow-md transform transition-transform hover:scale-105"
                >
                  <UIcon name="i-heroicons-user-plus" class="w-5 h-5 mr-2"/>
                  Devenir membre
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- Membership Options -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Options d'adhésion
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-pink-100 relative">
          <div class="absolute top-0 right-0 bg-pink-600 text-white py-1 px-3 text-sm font-bold">Populaire</div>
          <div class="h-2 bg-pink-600"></div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-gray-800 mb-2">Adhésion Pink Amazones</h3>
            <div class="text-pink-600 text-3xl font-bold mb-4">30€ <span class="text-sm text-gray-500 font-normal">/an</span></div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Tout de l'adhésion individuelle</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Pour tous les membres du foyer</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Invitation aux événements familiaux</span>
              </li>
            </ul>
            <UButton
                href="https://pink-amazones.s2.yapla.com/fr/espace-membres"
                target="_blank"
                variant="solid"
                color="pink"
                class="w-full rounded-full shadow-md"
            >
              Choisir cette option
            </UButton>
          </div>
        </div>


        <!-- Individual Membership -->
<!--        <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-pink-100">-->
<!--          <div class="h-2 bg-pink-500"></div>-->
<!--          <div class="p-6">-->
<!--            <h3 class="font-bold text-xl text-gray-800 mb-2">Adhésion Pink Amazones</h3>-->
<!--            <div class="text-pink-600 text-3xl font-bold mb-4">30€ <span class="text-sm text-gray-500 font-normal">/an</span></div>-->
<!--            <ul class="space-y-2 mb-6">-->
<!--              <li class="flex items-start">-->
<!--                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>-->
<!--                <span class="text-gray-700">Participation à nos événements</span>-->
<!--              </li>-->
<!--              <li class="flex items-start">-->
<!--                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>-->
<!--                <span class="text-gray-700">Bulletin d'information mensuel</span>-->
<!--              </li>-->
<!--              <li class="flex items-start">-->
<!--                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>-->
<!--                <span class="text-gray-700">Possibilité de faire du bénévolat</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <UButton-->
<!--                @click="goToAdhesion"-->
<!--                variant="outline"-->
<!--                color="pink"-->
<!--                class="w-full rounded-full hover:bg-pink-600 hover:text-white transition-colors"-->
<!--            >-->
<!--              Choisir cette option-->
<!--            </UButton>-->
<!--          </div>-->
<!--        </div>-->

        <!-- Supporting Membership -->
<!--        <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-pink-100">-->
<!--          <div class="h-2 bg-pink-500"></div>-->
<!--          <div class="p-6">-->
<!--            <h3 class="font-bold text-xl text-gray-800 mb-2">Adhésion Pink Amazones</h3>-->
<!--            <div class="text-pink-600 text-3xl font-bold mb-4">30€ <span class="text-sm text-gray-500 font-normal">/an</span></div>-->
<!--            <ul class="space-y-2 mb-6">-->
<!--              <li class="flex items-start">-->
<!--                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>-->
<!--                <span class="text-gray-700">Participation à nos événements</span>-->
<!--              </li>-->
<!--              <li class="flex items-start">-->
<!--                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>-->
<!--                <span class="text-gray-700">Bulletin d'information mensuel</span>-->
<!--              </li>-->
<!--              <li class="flex items-start">-->
<!--                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>-->
<!--                <span class="text-gray-700">Possibilité de faire du bénévolat</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <UButton-->
<!--                @click="goToAdhesion"-->
<!--                variant="outline"-->
<!--                color="pink"-->
<!--                class="w-full rounded-full hover:bg-pink-600 hover:text-white transition-colors"-->
<!--            >-->
<!--              Choisir cette option-->
<!--            </UButton>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>

    <!-- Testimonials -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Témoignages
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>

      <pink-testimonials-adhesion />
    </div>

    <!-- FAQ Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Questions fréquentes
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>

      <div class="space-y-4">
        <UAccordion :items="accordionItems" />
      </div>
    </div>

    <!-- Call to Action -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h3 class="text-2xl font-bold text-pink-700 mb-6">Faites un don dès aujourd'hui</h3>
      <p class="text-lg text-gray-700 mb-8">
        Votre générosité permet de donner de l'espoir et de sauver des vies.
      </p>
      <UButton
          to="/don"
          variant="solid"
          color="pink"
          size="xl"
          class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
      >
        <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2"/>
        Je fais un don
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import PinkMembers from '~/components/pink-members.vue';

definePageMeta({
  title: 'Adhésion',
  catchLine: 'Ensemble contre le cancer du sein'
});

const accordionItems = ref([
  {
    label: 'Comment mon adhésion est-elle utilisée ?',
    content: 'Votre cotisation nous permet de financer nos actions de soutien, de sensibilisation et de prévention.',
  },
  {
  label: 'Puis-je m\'impliquer en tant que bénévole ?',
    content: 'Absolument ! Nous accueillons avec joie les membres qui souhaitent s\'engager davantage. Vous pouvez nous aider lors des événements (exemple tenue d\'un stand vente de gâteau, aide à l\'installation et démontage du stand..), participer aux actions de sensibilisation ou apporter vos compétences spécifiques à l\'association.'
  },
  {
    label: 'L\'adhésion est-elle déductible des impôts ?',
    content: 'Malheureusement, notre association n\'étant pas encore reconnue d\'utilité publique, votre adhésion n\'est pas déductibles des impôts pour le moment.'
  }
]);

const goToAdhesion = () => {
  navigateTo("/adhesion/formulaire");
}
</script>