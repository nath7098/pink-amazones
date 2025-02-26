<template>
  <div class="container mx-auto px-4 py-16">
    <!-- Introduction Section -->
    <div class="max-w-4xl mx-auto text-center mb-16 mt-6">
      <h3 class="text-2xl md:text-3xl font-semibold text-pink-700 mb-6">Ensemble, luttons contre le cancer du sein</h3>
      <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
        Chaque année, des milliers de femmes et leurs proches sont touchés par le cancer du sein.
        Derrière chaque diagnostic, il y a une histoire, une bataille, une famille qui espère.
      </p>
      <p class="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
        Notre association s'engage à soutenir les patientes, sensibiliser à l'importance du dépistage
        et financer des actions concrètes pour améliorer leur quotidien. Mais nous ne pouvons pas y arriver seuls.
      </p>
      <div class="my-8 flex justify-center">
        <div class="w-24 h-1 bg-pink-500 rounded-full"></div>
      </div>
    </div>

    <!-- Why Donate Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
            Pourquoi donner ?
            <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
          </h2>

          <p class="text-gray-700 mb-6">Votre don, aussi petit soit-il, peut faire une grande différence. Il nous permet de :</p>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-pink-50 p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow">
              <div class="flex items-center mb-4">
                <UIcon name="i-heroicons-heart" class="w-8 h-8 text-pink-600 mr-3"/>
                <h3 class="font-bold text-gray-800">Soutenir</h3>
              </div>
              <p class="text-gray-700">Offrir du soutien psychologique et un accompagnement personnalisé aux patientes et à leurs proches.</p>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow">
              <div class="flex items-center mb-4">
                <UIcon name="i-heroicons-megaphone" class="w-8 h-8 text-pink-600 mr-3"/>
                <h3 class="font-bold text-gray-800">Sensibiliser</h3>
              </div>
              <p class="text-gray-700">Organiser des campagnes de prévention et de sensibilisation à l'importance du dépistage précoce.</p>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow">
              <div class="flex items-center mb-4">
                <UIcon name="i-heroicons-academic-cap" class="w-8 h-8 text-pink-600 mr-3"/>
                <h3 class="font-bold text-gray-800">Contribuer</h3>
              </div>
              <p class="text-gray-700">Participer au financement de la recherche et du développement de nouveaux traitements contre le cancer du sein.</p>
            </div>
          </div>

          <p class="text-lg text-gray-700">
            Ensemble, nous pouvons donner de l'espoir et sauver des vies.
          </p>
        </div>
      </div>
    </div>

    <!-- Donation Options Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Comment soutenir notre cause ?
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- One-time Donation -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-pink-100">
          <div class="h-2 bg-pink-500"></div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-gray-800 mb-4">Don ponctuel</h3>
            <p class="text-gray-700 mb-6">Un soutien immédiat pour nous aider à poursuivre nos actions quotidiennes.</p>
            <div class="space-y-4 mb-6">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Déductible des impôts à 66%</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Soutient nos actions immédiates</span>
              </div>
            </div>
            <UButton
                @click="openDonate"
                variant="solid"
                color="pink"
                class="w-full rounded-full shadow-md"
            >
              Je fais un don
            </UButton>
          </div>
        </div>

        <!-- Monthly Donation -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-pink-100 relative">
          <div class="absolute top-0 right-0 bg-pink-600 text-white py-1 px-3 text-sm font-bold">Recommandé</div>
          <div class="h-2 bg-pink-600"></div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-gray-800 mb-4">Don mensuel</h3>
            <p class="text-gray-700 mb-6">Un soutien régulier pour nous permettre de planifier nos actions sur le long terme.</p>
            <div class="space-y-4 mb-6">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Déductible des impôts à 66%</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Assure la pérennité de nos programmes</span>
              </div>
            </div>
            <UButton
                @click="openDonate"
                variant="solid"
                color="pink"
                class="w-full rounded-full shadow-md"
            >
              Je donne chaque mois
            </UButton>
          </div>
        </div>

        <!-- Corporate Donation -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-pink-100">
          <div class="h-2 bg-pink-500"></div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-gray-800 mb-4">Don d'entreprise</h3>
            <p class="text-gray-700 mb-6">Engagez votre entreprise dans une démarche solidaire et responsable.</p>
            <div class="space-y-4 mb-6">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Réduction d'impôt de 60%</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1"/>
                <span class="text-gray-700">Partenariat sur mesure</span>
              </div>
            </div>
            <UButton
                @click="openDonate"
                variant="outline"
                color="pink"
                class="w-full rounded-full hover:bg-pink-600 hover:text-white transition-colors"
            >
              Devenir partenaire
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Donation Impact Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <div class="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl shadow-md overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
            L'impact de votre don
            <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
          </h2>

          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="font-bold text-3xl text-pink-600 mb-2">20€</div>
              <p class="text-gray-700">Finance une heure d'accompagnement psychologique pour une patiente.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="font-bold text-3xl text-pink-600 mb-2">50€</div>
              <p class="text-gray-700">Permet d'organiser un atelier de bien-être pour 5 personnes touchées par la maladie.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="font-bold text-3xl text-pink-600 mb-2">100€</div>
              <p class="text-gray-700">Contribue à l'organisation d'une journée de sensibilisation au dépistage précoce.</p>
            </div>
          </div>

          <p class="text-lg text-gray-700 text-center font-medium">
            Faites un don dès aujourd'hui et rejoignez notre combat.
          </p>
        </div>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Ce que votre soutien permet
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-md border border-pink-100">
          <div class="flex items-center mb-4">
            <div class="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center text-pink-600 mr-4">
              <UIcon name="i-heroicons-user-circle" class="w-10 h-10" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800">Lucie M.</h4>
              <p class="text-gray-500 text-sm">Bénéficiaire</p>
            </div>
          </div>
          <p class="text-gray-700 italic">
            "Quand j'ai appris mon diagnostic, j'étais dévastée. Les ateliers et le soutien psychologique offerts par Pink Amazones m'ont donné la force de combattre. Je ne me suis jamais sentie seule dans cette épreuve."
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md border border-pink-100">
          <div class="flex items-center mb-4">
            <div class="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center text-pink-600 mr-4">
              <UIcon name="i-heroicons-user-circle" class="w-10 h-10" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800">Dr. Claire P.</h4>
              <p class="text-gray-500 text-sm">Oncologue</p>
            </div>
          </div>
          <p class="text-gray-700 italic">
            "Les actions de sensibilisation menées par l'association ont un impact réel sur le dépistage précoce. Nous voyons de plus en plus de femmes consulter tôt, ce qui augmente considérablement leurs chances de guérison."
          </p>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative inline-block">
        Questions fréquentes
        <div class="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500 rounded-full"></div>
      </h2>

      <div class="space-y-4">
        <UAccordion>
          <UAccordionItem>
            <template #default>
              <div class="text-lg font-medium text-gray-800">Comment mon don est-il utilisé ?</div>
            </template>
            <template #content>
              <p class="text-gray-700">
                L'intégralité de votre don est dédiée à nos missions de soutien aux patientes, de sensibilisation au dépistage et de contribution à la recherche. Nos frais administratifs sont couverts par des subventions spécifiques.
              </p>
            </template>
          </UAccordionItem>

          <UAccordionItem>
            <template #default>
              <div class="text-lg font-medium text-gray-800">Mon don est-il déductible des impôts ?</div>
            </template>
            <template #content>
              <p class="text-gray-700">
                Oui, en tant qu'association reconnue d'utilité publique, vos dons sont déductibles des impôts à hauteur de 66% dans la limite de 20% de votre revenu imposable. Par exemple, un don de 100€ ne vous coûte réellement que 34€ après déduction fiscale.
              </p>
            </template>
          </UAccordionItem>

          <UAccordionItem>
            <template #default>
              <div class="text-lg font-medium text-gray-800">Puis-je faire un don en mémoire d'un proche ?</div>
            </template>
            <template #content>
              <p class="text-gray-700">
                Oui, vous avez la possibilité de faire un don en mémoire d'un proche. Vous pouvez indiquer son nom lors de votre don en ligne, ou nous contacter directement pour organiser un don commémoratif.
              </p>
            </template>
          </UAccordionItem>
        </UAccordion>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h3 class="text-2xl font-bold text-pink-700 mb-6">Rejoignez-nous aujourd'hui</h3>
      <p class="text-lg text-gray-700 mb-8">
        Ensemble, nous pouvons faire la différence dans la vie des personnes touchées par le cancer du sein.
      </p>
      <UButton
          to="/adhesion"
          variant="solid"
          color="pink"
          size="xl"
          class="rounded-full shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1"
      >
        <UIcon name="i-heroicons-user-plus" class="w-5 h-5 mr-2"/>
        Devenir membre
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Don',
  catchLine: 'Ensemble contre le cancer du sein'
});

const openDonate = () => {
  navigateTo('https://pink-amazones.s2.yapla.com/fr/campaign-10303/donate/lancement-association-pink-amazones/10303', {external: true, open: {target: '_blank'}});
}
</script>