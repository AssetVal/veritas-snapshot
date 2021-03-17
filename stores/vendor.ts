import {writable, Writable} from 'svelte/store';
import type Vendor from '../classes/Vendor';

export const vendor: Writable<boolean|Vendor> = writable(false)
