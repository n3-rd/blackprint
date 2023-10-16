import { writable } from 'svelte/store';

export const modalOpen = writable(false);

export const qrcodeText = writable('https://n3rd.vercel.app');
export const qrcodeName = writable('n3rd');
