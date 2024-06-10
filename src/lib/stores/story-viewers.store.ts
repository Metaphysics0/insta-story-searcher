import { writable } from 'svelte/store';

export const storyViewersStore = writable<string[]>([]);
