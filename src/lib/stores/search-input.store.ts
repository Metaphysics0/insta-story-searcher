import { writable } from 'svelte/store';

export const searchInputStore = writable<string>('');
