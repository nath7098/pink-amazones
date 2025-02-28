import { parse } from 'node-html-parser'
export default defineEventHandler(async () => {
    const donateHTMLData = await $fetch<string>('https://pink-amazones.s2.yapla.com/fr/campaign-10303/detail/lancement-association-pink-amazones/10303');
    const page = parse(donateHTMLData);

    const donation = page.querySelector('.campaign-donate-details-part.thermo-circ');
    const wrapper = donation?.querySelector('.thermometer-wrapper');
    const container = wrapper?.querySelector('.thermometer-circular-container');
    const objectif_text = container?.querySelector('.objective')?.querySelector('span')?.text;
    const dons_text = container?.querySelector('.thermometer-circular')?.querySelector('.inset')?.querySelector('.amount')?.querySelector('.numbers')?.querySelector('span')?.text;

    console.log('api', objectif_text, dons_text);
    const dons = dons_text?.replace(/[\s€]/g, '');
    const objectif = objectif_text?.replace(/[\s€]/g, '');

    return {objectif, dons};
})