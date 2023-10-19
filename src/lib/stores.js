import { writable } from 'svelte/store';

export const modalOpen = writable(false);
export const ColorModalOpen = writable(false);

export const foregroundColor = writable('#000000');
export const backgroundColor = writable('#ffffff');

export const qrcodeText = writable('https://n3rd.vercel.app');
export const qrcodeName = writable('n3rd');
