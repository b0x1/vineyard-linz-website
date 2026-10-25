import type { ImageMetadata } from 'astro';
import hauptplatz from '../assets/images/hauptplatz.jpg';
import lentos from '../assets/images/lentos.jpg';
import poestlingberg from '../assets/images/poestlingberg.jpg';
import hands from '../assets/images/hands.jpg';
import linzLebtLiebe from '../assets/images/linz-lebt-liebe.jpg';
import brandPattern from '../assets/images/brand-pattern.jpg';
import jidaRobin from '../assets/images/jida-robin.jpg';
import werSindWirHero from '../assets/images/wer-sind-wir-hero.jpg';
import vineyardPerson from '../assets/images/vineyard-person.png';
import logoCmyk from '../assets/images/vlinz-logo-cmyk.png';
import logoMonoRed from '../assets/images/vlinz-logo-mono-red.png';
import iconCmyk from '../assets/images/vlinz-sq-icon-cmyk.png';
import iconMonoRed from '../assets/images/vlinz-sq-icon-mono-red.png';
import iconTransparent from '../assets/images/vlinz-sq-icon-transparent.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';
import whatsapp from '../assets/images/whatsapp.png';
import instagram from '../assets/images/instagram.jpg';
import gottesdienstHero from '../assets/images/gottesdienst-hero.jpg';
import hubsHero from '../assets/images/hubs-hero.jpg';
import macheMitHero from '../assets/images/mache-mit-hero.jpg';

const localImages: Record<string, ImageMetadata> = {
  '/images/hauptplatz.jpg': hauptplatz,
  '/images/lentos.jpg': lentos,
  '/images/poestlingberg.jpg': poestlingberg,
  '/images/hands.jpg': hands,
  '/images/linz-lebt-liebe.jpg': linzLebtLiebe,
  '/images/brand-pattern.jpg': brandPattern,
  '/images/jida-robin.jpg': jidaRobin,
  '/images/wer-sind-wir-hero.jpg': werSindWirHero,
  '/images/vineyard-person.png': vineyardPerson,
  '/images/vlinz-logo-cmyk.png': logoCmyk,
  '/images/vlinz-logo-mono-red.png': logoMonoRed,
  '/images/vlinz-sq-icon-cmyk.png': iconCmyk,
  '/images/vlinz-sq-icon-mono-red.png': iconMonoRed,
  '/images/vlinz-sq-icon-transparent.png': iconTransparent,
  '/images/twitter.png': twitter,
  '/images/facebook.png': facebook,
  '/images/whatsapp.png': whatsapp,
  '/images/instagram.jpg': instagram,
  '/images/gottesdienst-hero.jpg': gottesdienstHero,
  '/images/hubs-hero.jpg': hubsHero,
  '/images/mache-mit-hero.jpg': macheMitHero,
};

export function resolveImage(src?: string): ImageMetadata | undefined {
  if (!src) return undefined;
  return localImages[src];
}
