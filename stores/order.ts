import {Writable, writable} from 'svelte/store';
import Order from '../classes/Order';

export const order: Writable<Order> = writable(new Order());
