import persistentWritable from './modules/persistentWritable';
import Order from '../classes/Order';

export const order = persistentWritable('order', new Order());


