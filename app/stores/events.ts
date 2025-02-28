import { defineStore } from 'pinia';
import { PinkEvent } from '../types/pink-event';

export const useEventsStore = defineStore('events', {
    state: () => ({
            events: [
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
                    title: 'Atelier Bien-être',
                    date: new Date('2025/04/15'),
                    time: '14:30 - 16:30',
                    location: 'Centre communal, Pernay',
                    description: 'Séance de yoga et méditation pour les patientes et leurs proches.',
                    type: 'Soutien'
                },
                {
                    title: 'Dîner Caritatif',
                    date: new Date('2025/05/02'),
                    time: '19:30 - 23:00',
                    location: 'Salle des fêtes, Pernay',
                    description: 'Soirée gastronomique dont les bénéfices financeront nos actions de soutien.',
                    type: 'Collecte de fonds'
                },
                {
                    title: 'Conférence Prévention',
                    date: new Date('2025/05/18'),
                    time: '18:00 - 20:00',
                    location: 'Mairie de Pernay',
                    description: 'Intervention de professionnels de santé sur l\'importance du dépistage précoce.',
                    type: 'Sensibilisation'
                },
                {
                    title: 'Course pour la vie',
                    date: new Date('2024/10/10'),
                    location: 'Parc de Pernay',
                    type: 'Sensibilisation'
                },
                {
                    title: 'Vente de pâtisseries',
                    date: new Date('2024/09/25'),
                    location: 'Marché de Pernay',
                    type: 'Collecte de fonds'
                },
                {
                    title: 'Groupe de parole',
                    date: new Date('2024/09/15'),
                    location: 'Centre social, Pernay',
                    type: 'Soutien'
                },
                {
                    title: 'Exposition photos',
                    date: new Date('2024/09/01'),
                    location: 'Médiathèque de Pernay',
                    type: 'Sensibilisation'
                },
                {
                    title: 'Concert solidaire',
                    date: new Date('2024/08/15'),
                    location: 'Place de l\'église, Pernay',
                    type: 'Collecte de fonds'
                }
            ] as Array<PinkEvent>
        }),
    getters: {
        orderedEvents(state) {
            return state.events.sort((a, b) => a.date.getTime() >= b.date.getTime())
        } ,
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