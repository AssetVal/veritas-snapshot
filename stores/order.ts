import persistentWritable from './modules/persistentWritable';
import type {Writable} from 'svelte/store';
import Order from '../classes/Order';

export const order: Writable<Order> = persistentWritable('order', new Order());
