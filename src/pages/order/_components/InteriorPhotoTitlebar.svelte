<script lang="ts">
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';
  import confirmChoice from '../../../_modules/confirmationDialoge';
  import clearImageByName from '../../../_modules/clearImageByName';
  import type { APIResponse } from '../../../_modules/APIResponse';
  import toastResults from '../../../_modules/toastResults';
  import type Order from '../../../../classes/Order';
  import { vendor } from '../../../../stores/vendor';
  import { order } from '../../../../stores/order';

  export let name = '';

  const clearPhoto = async(name: string) => {
    const choice = await confirmChoice(`Yes, delete this photo`);

    if (choice.isConfirmed) {
      const {status, message, data} = await clearImageByName('interior', $order, name) as APIResponse

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
    <span class="text-center ml-auto ">Interior</span>
    {#if $order.photos.interiorFiles.filter(entry => entry.name === name).length > 0}
      <div class="ml-auto pr-1 flex items-center cursor-pointer" on:click={() => clearPhoto(name)}>
        <TrashIcon classes="h-5 w-5"/>
      </div>
    {/if}
  </div>
</div>
