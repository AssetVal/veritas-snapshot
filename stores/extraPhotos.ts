import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

export const extraPhotos: Writable<boolean> = writable(false);
export default extraPhotos;
