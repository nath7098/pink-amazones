export type PinkEvent = {
    title: String;
    date: Date;
    time?: String;
    location: String;
    description?: String;
    type: 'Sensibilisation' | 'Soutien' | 'Collecte de fonds';
    image?: String;
    price?: number | String;
    priceAdh?: number | String;
    link?: String;
    linkAdh?: String;
};
