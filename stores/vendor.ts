import persistentWritable from './modules/persistentWritable';
import type {Writable} from 'svelte/store';
import Vendor from '../classes/Vendor';

export const vendor: Writable<Vendor> = persistentWritable('vendor', new Vendor())

export default vendor;
