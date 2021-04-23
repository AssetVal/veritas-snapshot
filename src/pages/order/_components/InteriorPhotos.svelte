<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import {order} from '../../../../stores/order';
  import uppyInstance from '../_modules/uppyFactory';
  import toastResults from '../../../_modules/toastResults';
  import confirmChoice from '../../../_modules/confirmationDialoge';
  import clearPhotosFolder from '../../../_modules/clearPhotoFolder';
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';

  const clearInteriorPhotos = async () => {
    const choice = await confirmChoice('Yes, delete all interior photos!');

    if (choice.isConfirmed){
      const {status, message, data} = await clearPhotosFolder('interior', $order)
      toastResults(status, message, () => { $order = data; })
    }
  }
</script>

<div class="flex f-row">
  <header class="mt-3 mb-1 p-0 block">
    <h1 class="mt-0 mr-auto text-3xl font-semibold mb-2">
      Interior Photos
    </h1>
  </header>
  <div class="ml-auto flex items-center">
    <div class="rounded-full bg-dark-transparent h-8 w-8 flex items-center justify-center cursor-pointer" on:click={clearInteriorPhotos}>
      <TrashIcon height="1.4rem" width="1.4rem" />
    </div>
  </div>
</div>

<div class="h-full grid grid-cols-1 gap-3">
  <Dashboard
    uppy={uppyInstance(50, $order, 'None')}
    props={{
      inline: true,
      height: 300,
      proudlyDisplayPoweredByUppy: false,
    }}
  />
</div>
