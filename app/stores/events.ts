import { defineStore } from 'pinia';
import { PinkEvent } from '../types/pink-event';

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: [
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
            return state.events.sort((a, b) => a.date.getTime() >= b.date.getTime())
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