import {writable} from 'svelte/store';
import Order from '../classes/Order';

const localStore = (key: string, value: any) => {
  const {subscribe, set} = writable(value);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) set(JSON.parse(json));
      subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
      })
    }
  }
}

export const order = localStore('order', new Order());
order.useLocalStorage();

