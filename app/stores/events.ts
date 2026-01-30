import { defineStore } from 'pinia';
import { type PinkEvent } from '~/types/pink-event';

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: [
            {
                title: 'Vivre mieux le cancer en touraine',
                date: new Date('2026/03/14'),
                time: '10h30 - 18h',
                location: 'Palais des congrès - Tours',
                description: 'Pink Amazones sera présente sur l\'évènement "Vivre mieux le cancer en touraine".',
                type: 'Soutien',
                link: '',
                image: 'https://cdn.nathancouton.fr/event_vivre_mieux_2026/affiche.jpg',
            },
            {
                title: 'Atelier nutrition & cancer',
                date: new Date('2026/03/07'),
                time: '14h - 16h30',
                location: 'Salle Jean Mermoz - Ballan Miré',
                description: 'Pink Amazones vous propose un atelier en partenariat avec Alexandra Pays "Aléquilibre".',
                type: 'Soutien',
                link: 'https://www.helloasso.com/associations/pink-amazones/evenements/conference-cancer-et-nutrition',
                linkAdh: 'https://www.helloasso.com/associations/pink-amazones/evenements/atelier-nutrition-et-cancer-adherentes',
                image: 'https://cdn.nathancouton.fr/event_nutrition_2026/affiche.png',
            },
            {
                title: 'Blabla café - Atelier créatif',
                date: new Date('2026/02/07'),
                time: '14h - 17h30',
                price: 20,
                priceAdh: "tarif réduit",
                location: 'Salle Jean Mermoz - Ballan Miré',
                description: 'Pink Amazones vous propose un moment de partage et de création ! Création de bougies avec l\'atelier Galhubert.',
                type: 'Soutien',
                link: 'https://www.helloasso.com/associations/pink-amazones/evenements/blabla-cafe-atelier-creatif',
                linkAdh: 'https://www.helloasso.com/associations/pink-amazones/evenements/blabla-cafe-atelier-creatif-adherentes',
                image: 'https://cdn.nathancouton.fr/event_blabla_cafe_2026/affiche.png',
            },
            {
                title: 'Atelier "découverte" - Lacher-prise',
                date: new Date('2026/01/31'),
                time: '14h30 - 17h',
                price: 35,
                priceAdh: 15,
                location: 'Ballan Miré',
                description: 'Pink Amazones vous propose un atelier "découverte" Lacher-Prise pour libérer son mental, ses émotions et son corps. Exercices de sophro-méditation et peinture intuitive, animé bénévolement par Catherine Demay, Thérapeute certifiée.',
                type: 'Soutien',
                linkAdh: 'https://www.helloasso.com/associations/pink-amazones/evenements/atelier-decouverte-lacher-prise',
                link: 'https://www.helloasso.com/associations/pink-amazones/evenements/atelier-decouverte-lacher-prise-pour-les-non-adherent-e-s',
                image: 'https://cdn.nathancouton.fr/event_sophro_2026/affiche.jpg',
            },
            {
                title: 'Octobre Rose - Marche et course nature à fondettes',
                date: new Date('2025/10/25'),
                location: 'Fondettes',
                description: 'marche et course nature à fondettes, où tous les bénéfices ont été reversés à notre association, avec la tenue d\'un stand .',
                type: 'Soutien',
                image: 'https://cdn.nathancouton.fr/event_la_belle_aubriere/001.jpg',
            },
            {
                title: 'Octobre Rose - Intervention MFR d\'azay le rideau',
                date: new Date('2025/10/09'),
                location: 'MFR - Azay-le-Rideau',
                description: 'Intervention de sensibilisation et prévention auprès de jeunes de 4eme, 3eme 1ere et terminale.',
                type: 'Sensibilisation',
                image: 'https://cdn.nathancouton.fr/event_mfr/001.jpg',
            },
            {
                title: 'Octobre Rose - stand de sensibilisation et prévention',
                date: new Date('2025/10/06'),
                location: 'Pôle VINCI - Chambray',
                description: 'Stand de sensibilisation et prévention.',
                type: 'Sensibilisation',
                image: 'https://cdn.nathancouton.fr/event_pslv/001.jpg',
            },
            {
                title: 'Défi solidaire 20 000 pochettes Institut Curie',
                date: new Date('2025/09/01'),
                location: 'Ballan Miré',
                description: 'Envoie de plusieurs pochettes, trousses confectionnées gracieusement pour offrir douceur et reconfort aux femmes atteintes du cancer du sein à l\'Institut Curie',
                type: 'Soutien',
                image: 'https://cdn.nathancouton.fr/event_curi/001.jpg',
            },
            {
                title: 'Atelier sophrologie',
                date: new Date('2025/06/28'),
                location: 'Maison des associations - Place des victoires 37230 PERNAY',
                description: `Atelier découverte de méditation et sophrologie.`,
                type: 'Soutien',
                price: 20,
                image: 'https://cdn.nathancouton.fr/event_sophrologie_2025/001.jpg',
            },
            {
                title: 'Blabla Café',
                date: new Date('2025/04/16'),
                time: '14:00 - 17:00',
                location: 'Boulangerie FEUILLETTE - Saint-Cyr-Sur-Loire',
                description: 'Vous êtes touché(e) par un cancer de sein ? Vous accompagnez un proche concerné ? Prenez un moment pour vous. Partagez votre parcours, vos ressentis, vos questions et vos besoins, autour d’un café, dans un cadre bienveillant et convivial.',
                price: 5,
                type: 'Soutien',
                image: '/img/events/blabla-cafe.png',
                link: 'https://www.helloasso.com/associations/pink-amazones/evenements/blabla-cafe'
            },
            {
                title: 'Marche rose',
                date: new Date('2025/03/30'),
                time: '08:30',
                location: 'Parking salle des fêtes - rue de la gare 37230 Pernay',
                description: 'À l’occasion du lancement de notre association Pink Amazones, nous vous invitons à une Marche Rose solidaire de 9 km, ouverte à tous : débutants, confirmés et même aux enfants !',
                price: 4,
                type: 'Sensibilisation',
                image: '/img/events/marche-rose.png',
                link: 'https://www.helloasso.com/associations/pink-amazones/evenements/marche-rose-pernay'
            },
            {
                title: 'Salon des roses',
                date: new Date('2025/03/08'),
                time: '10:00 - 17:00',
                location: 'L\'escale - Allée René Coulon 37540 Saint-Cyr-Sur-Loire',
                description: 'création d\'un espace chaleureux dédié à l\'échange, soutien et partage d\'expérience, à disposition toute la journée lors du salon des roses, animée par l\'association Pink Amazones.',
                type: 'Sensibilisation',
                image: 'https://cdn.eu.yapla.com/company/CPYtv0MnpBl4ROU59xFwmdsIk/88625/241789/images/1-1739978466.jpg'
            }
        ] as Array<PinkEvent>
    }),
    getters: {
        orderedEvents(state) {
            return state.events.sort((a, b) => a.date.getTime() >= b.date.getTime() ? 1 : -1)
        },
        upcomingEvents(): Array<PinkEvent> {
            return this.orderedEvents.filter((e: PinkEvent) => e.date.getTime() >= Date.now())
        },
        next2Events(): Array<PinkEvent> {
            return this.upcomingEvents.filter((e, i) => i < 2)
        },
        pastEvents(): Array<PinkEvent> {
            return this.orderedEvents.reverse().filter((e: PinkEvent) => e.date.getTime() < Date.now())
        },
    },
    actions: {}
})