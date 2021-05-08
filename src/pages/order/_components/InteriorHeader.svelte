<script>
  import NarrowBackIcon from '../../../../components/icons/NarrowBackIcon.svelte';
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';
  import PlusIcon from '../../../../components/icons/PlusIcon.svelte';
  import clearPhotosFolder from '../../../_modules/clearPhotoFolder';
  import confirmChoice from '../../../_modules/confirmationDialoge';
  import toastResults from '../../../_modules/toastResults';
  import extraPhotos from '../../../../stores/extraPhotos';
  import {order} from '../../../../stores/order';

  const clearInteriorPhotos = async () => {
    const choice = await confirmChoice('Yes, delete all interior photos!');

    if (choice.isConfirmed) {
      const {status, message, data} = await clearPhotosFolder('interior', $order);
      toastResults(status, message, () => {
        $order = data;
      });
    }
  };


</script>

<div class="flex f-row">
  <header class="mt-3 mb-1 p-0 block">
    <h1 class="mt-0 mr-auto text-3xl font-semibold mb-2"> Interior Photos </h1>
  </header>
  <div class="ml-auto flex items-center">
    {#if $order.photos.interiorFiles.length > 0 && !$extraPhotos}
      <div class="rounded-full bg-dark-transparent h-8 w-8 flex items-center justify-center cursor-pointer mr-2" on:click={() => extraPhotos.update(n => n = true)}>
        <PlusIcon height="1.4rem" width="1.4rem" />
      </div>
    {:else}
      <div class="rounded-full bg-dark-transparent h-8 w-8 flex items-center justify-center cursor-pointer mr-2" on:click={() => extraPhotos.update(n => n = false)}>
        <NarrowBackIcon height="1.4rem" width="1.4rem" />
      </div>
    {/if}
    <div class="rounded-full bg-dark-transparent h-8 w-8 flex items-center justify-center cursor-pointer" on:click={clearInteriorPhotos}>
      <TrashIcon height="1.4rem" width="1.4rem" />
    </div>
  </div>
</div>
