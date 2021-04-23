import toastThemes from './toastThemes';
import {toast} from '@zerodevx/svelte-toast';


export const toastResults = (status: 'success'|'error'|'failure', message: string, successFn: Function|null = null) => {
  if (status === 'success') {
    toast.push(message, toastThemes.success);
    if (successFn) successFn();
  } else if (status === 'error') {
    toast.push(message, toastThemes.error)
  } else {
    toast.push(message)
  }
}
export default toastResults;
