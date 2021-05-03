import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

/**
 * Updater type -> Sets the initial type as a generic
 */
declare type Updater<T> = (value: T) => T;

/**
 * A Local Store based writable store, that persist after visit.
 * @param key
 * @param initialValue
 */
export default function persistentWritable<T>(key: string, initialValue: T): Writable<T> {
  const store: Writable<T> = writable(initialValue);
  const {subscribe, set} = store;
  const json: string = typeof(localStorage) != 'undefined' ? localStorage.getItem(key) : null;

  if (json) set(<T> JSON.parse(json));

  function updateStorage(key: string, value: T): void {
    if (typeof(localStorage) == 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value))
  }

  return {
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
