import { defineStore } from 'pinia';
import { type PinkEvent } from '~/types/pink-event';

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: [
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
                description: 'Gratuit et ouvert à tous !',
                type: 'Sensibilisation',
                image: 'https://cdn.eu.yapla.com/company/CPYtv0MnpBl4ROU59xFwmdsIk/88625/241789/images/1-1739978466.jpg'
            },
            {
                title: 'Marche rose 37',
                date: new Date('2024/10/21'),
                location: 'Pernay',
                type: 'Sensibilisation'
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
            return this.orderedEvents.filter((e: PinkEvent) => e.date.getTime() < Date.now())
        },
    },
    actions: {}
})