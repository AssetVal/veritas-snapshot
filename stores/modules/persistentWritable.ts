import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

/**
 * Updater type -> Sets the initial type as a generic
 */
declare type Updater<T> = (value: T) => T;
declare type StoreDict = { [key: string]: Writable<any> }

const stores: StoreDict = {}

/**
 * A Local Store based writable store, that persist after visit.
 * @param key
 * @param initialValue
 */
export default function persistentWritable<T>(key: string, initialValue: T): Writable<T> {
  const browser = typeof(localStorage) != 'undefined';

  function updateStorage(key: string, value: T): void {
    if (!browser) return;
    localStorage.setItem(key, JSON.stringify(value))
  }

  if (!stores[key]){
    const store = writable(initialValue, (set) => {
    const json = browser ? localStorage.getItem(key) : null;

    if (json) set(<T> JSON.parse(json));

    if (browser) { // Handle multiple tabs open
      const handleStorage = (event: StorageEvent) => {
        if (event.key === key) set(event.newValue ? JSON.parse(event.newValue) : null)
      }

      window.addEventListener('storage', handleStorage)

      return () => window.removeEventListener('storage', handleStorage)
    }
    })

    const { subscribe, set } = store;

    stores[key] = {
      set(value: T): void {
        updateStorage(key, value);
        set(value);
      },
      update(updater: Updater<T>): void {
        const value: T = updater(get(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe
    }
  }
  return stores[key]
}
