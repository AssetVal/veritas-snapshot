<script lang="ts">
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';
  import HelpIcon from '../../../../components/icons/HelpIcon.svelte';
  import confirmChoice from '../../../_modules/confirmationDialoge';
  import type { APIResponse } from '../../../_modules/APIResponse';
  import toastResults from '../../../_modules/toastResults';
  import clearImage from '../../../_modules/clearImage';
  import type Order from '../../../../classes/Order';
  import { vendor } from '../../../../stores/vendor';
  import { order } from '../../../../stores/order';
  import Swal from 'sweetalert2';
  import clearImageByName from '../../../_modules/clearImageByName';
  
  export let category: { text: any; id: any; hint?: any; };
  export let name = '';

  const clearPhoto = async (category: { id: string, text: string }) => {
    const choice = await confirmChoice((category.id === 'addendum')
    ? `Yes, delete this photo`
    : `Yes, delete the ${category.text} photo`);

    if (choice.isConfirmed) {
      const {status, message, data} = (category.id === 'addendum') 
      ? await clearImageByName('exterior', $order, name) as APIResponse
      : await clearImage('exterior', $order, category.id) as APIResponse;

      toastResults(status, message, () => {
        $order = data;
        $vendor.orders.inProgress = [...$vendor?.orders.inProgress.filter((order: Order) => order._id !== data._id), $order];
      });
    }
  };
</script>

<div class="flex justify-center">
  <div class="rounded-md bg-blue-primary-dark text-white w-full flex flex-row justify-center">
    <div>&nbsp;</div>
    <span class="text-center ml-auto ">{category.text}</span>
    {#if $order.photos.exteriorFiles.filter(entry => entry.category === category.id).length > 0}
      <div class="ml-auto pr-1 flex items-center cursor-pointer" on:click={() => clearPhoto(category)}>
        <TrashIcon classes="h-5 w-5"/>
      </div>
    {:else}
      <div class="ml-auto pr-1 flex items-center cursor-pointer" on:click={() => {
          Swal.fire({ title: category.text, text: category.hint, icon: 'info'})
      }}>
        <HelpIcon classes="h-5 w-5"/>
      </div>
    {/if}
  </div>
</div>
