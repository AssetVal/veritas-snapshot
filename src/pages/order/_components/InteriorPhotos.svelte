<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import Order from '../../../../classes/Order';
  import {order} from '../../../../stores/order';
  import {vendor} from '../../../../stores/vendor';
  import uppyInstance from '../_modules/uppyFactory';
  import editorExpanded from '../../../../stores/editor';
  import toastResults from '../../../_modules/toastResults';
  import confirmChoice from '../../../_modules/confirmationDialoge';
  import clearPhotosFolder from '../../../_modules/clearPhotoFolder';
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';

  const uppy = uppyInstance(50, $order, 'None');
  uppy.on('file-editor:start', () => { editorExpanded.update(n => n = true) });
  uppy.on('file-editor:complete', () => { editorExpanded.update(n => n = false) });
  uppy.on('complete', async(result): Promise<void> => {
    console.log('successful files:', result.successful);
    console.log('failed files:', result.failed);

    if (result.successful.length > 0) {
      const interiorPhotos = result.successful;
      const {status, message, data} = interiorPhotos[0].response.body;

      toastResults(status, message, () => {
        $order = data;
        $vendor.orders.inProgress = [...$vendor.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];
      })
    }
  });

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
    uppy={uppy}
    props={{
      inline: true,
      height: 300,
      proudlyDisplayPoweredByUppy: false,
      plugins: ['ImageEditor']
    }}
  />
</div>
