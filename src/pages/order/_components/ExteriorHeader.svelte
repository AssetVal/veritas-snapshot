<script lang="ts">
  import CheckmarkIcon from '../../../../components/icons/CheckmarkIcon.svelte';
  import RefreshIcon from '../../../../components/icons/RefreshIcon.svelte';
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';
  import clearPhotosFolder from '../../../_modules/clearPhotoFolder';
  import confirmChoice from '../../../_modules/confirmationDialoge';
  import postToVeritas from '../../../_modules/postToVeritas';
  import toastResults from '../../../_modules/toastResults';
  import type Order from '../../../../classes/Order';
  import {vendor} from '../../../../stores/vendor';
  import {order} from '../../../../stores/order';
  import type { photoCategoryIDs } from '../_data/exteriorPhotoCategories';
  
  export let categories: Array<{ text: string; id: photoCategoryIDs; required: boolean, hint: string, order: number }>;

  const clearExteriorPhotos = async () => {
    const choice = await confirmChoice('Yes, delete all exterior photos!');

    if (choice.isConfirmed) {
      const {status, message, data} = await clearPhotosFolder('exterior', $order);

      toastResults(status, message, () => {
        $order = data;
        $vendor.orders.inProgress = [...$vendor.orders.inProgress.filter((order: Order) => order._id !== data._id), $order];
      });
    }
  };

  const refreshOrder = async () => {
    const {status, message, data} = await postToVeritas(`/snapshotRefreshOrder/${$order._id}`, {});

    toastResults(status, message, () => {
      $order = data;
      $vendor.orders.inProgress = [...$vendor.orders.inProgress.filter((order: Order) => order._id !== data._id), $order];
    });
  };
</script>

<div class="flex f-row">
  <header class="mt-3 mb-1 p-0 block flex items-center">
    <h1 class="mt-0 mr-auto text-3xl font-semibold mb-2"> Exterior Photos </h1>
    {#if $order.photos.exteriorFiles.length === categories.length}
      <CheckmarkIcon height="2rem" width="2rem" classes="text-green-600 mb-2 ml-2" />
    {/if}
  </header>
  <div class="ml-auto flex items-center">
    <div class="rounded-full bg-dark-transparent h-8 w-8 flex items-center justify-center cursor-pointer mr-2" on:click={refreshOrder}>
      <RefreshIcon height="1.4rem" width="1.4rem" />
    </div>
    <div class="rounded-full bg-dark-transparent h-8 w-8 flex items-center justify-center cursor-pointer" on:click={clearExteriorPhotos}>
      <TrashIcon height="1.4rem" width="1.4rem" />
    </div>
  </div>
</div>
