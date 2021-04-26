import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

export const editorExpanded: Writable<boolean> = writable(false);
export default editorExpanded;
