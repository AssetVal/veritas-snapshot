<script lang="ts">
  import Swal from 'sweetalert2';
  import {Dashboard} from '@uppy/svelte';
  import {
    exteriorPhotoCategories,
    exteriorPhotoCategoriesForInteriorOrders,
    optionalPhotoCategories,
  } from '../_data/exteriorPhotoCategories';
  import Order from '../../../../classes/Order';
  import {order} from '../../../../stores/order';
  import {vendor} from '../../../../stores/vendor';
  import * as ImageEditor from '@uppy/image-editor';
  import uppyInstance from '../_modules/uppyFactory';
  import clearImage from '../../../_modules/clearImage';
  import editorExpanded from '../../../../stores/editor';
  import toastResults from '../../../_modules/toastResults';
  import postToVeritas from '../../../_modules/postToVeritas';
  import Image from '../../../../components/layout/Image.svelte';
  import confirmChoice from '../../../_modules/confirmationDialoge';
  import clearPhotosFolder from '../../../_modules/clearPhotoFolder';
  import HelpIcon from '../../../../components/icons/HelpIcon.svelte';
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';
  import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';
  import RefreshIcon from '../../../../components/icons/RefreshIcon.svelte';

  let photoCategories = [...exteriorPhotoCategories, ...optionalPhotoCategories];
  let mobileColumn = 'one';

  if ($order.services.isInterior) {
    photoCategories = [
      ...exteriorPhotoCategories,
      ...exteriorPhotoCategoriesForInteriorOrders,
    ].sort(({order: a}, {order: b}) => a - b);
  }

  if ($order.services.extendedExteriorPhotos) {
    photoCategories = [
      ...photoCategories,
      ...optionalPhotoCategories
    ].sort(({order: a}, {order: b}) => a - b);
  }

  const exteriorPhotosUppyInstance = (category: photoCategoryIDs) => {
    // Create a new Uppy instance
    const uppy = uppyInstance(1, $order, category);
    // If they open the photo editor, expand our editor modal
    uppy.on('file-editor:start', () => { editorExpanded.update(n => n = true); });
    // When they finish or close editing, close the editor modal
    uppy.on('file-editor:complete', () => { editorExpanded.update(n => n = false); });
    // On finish upload look for success
    uppy.on('complete', async (result): Promise<void> => {
      if (result.successful.length > 0) {
        const exteriorPhoto = result.successful[0];
        const {status, message, data} = exteriorPhoto.response.body;

        toastResults(status, message, () => {
          $order = data;
          $vendor?.orders.inProgress = [...$vendor?.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];
        });
      }
    });
    return uppy;
  };

  const clearPhoto = async (category: { id: string, text: string }) => {
    const choice = await confirmChoice(`Yes, delete the ${category.text}`);

    if (choice.isConfirmed) {
      const {status, message, data} = await clearImage('exterior', $order, category.id);

      toastResults(status, message, () => {
        $order = data;
        $vendor?.orders.inProgress = [...$vendor?.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];
      });
    }
  };

  const clearExteriorPhotos = async () => {
    const choice = await confirmChoice('Yes, delete all exterior photos!');

    if (choice.isConfirmed) {
      const {status, message, data} = await clearPhotosFolder('exterior', $order);

      toastResults(status, message, () => {
        $order = data;
        $vendor?.orders.inProgress = [...$vendor?.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];
      });
    }
  };

  const refreshOrder = async() => {
    const {status, message, data} = await postToVeritas(`/snapshotRefreshOrder/${$order._id}`, {});

    toastResults(status, message, () => {
      $order = data;
      $vendor?.orders.inProgress = [...$vendor?.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];
    });
  }
</script>

<div class="flex f-row">
  <header class="mt-3 mb-1 p-0 block">
    <h1 class="mt-0 mr-auto text-3xl font-semibold mb-2">
      Exterior Photos
    </h1>
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

<div class={mobileColumn === 'one' ? "h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2" : "h-full grid grid-cols-2 gap-2"}>
  {#each photoCategories as category, index}
    <div class="h-2/3">
      <div class="flex justify-center">
        <div class="rounded-md bg-blue-primary-dark text-white w-full flex flex-row justify-center">
          <div>&nbsp;</div>
          <span class="text-center ml-auto ">{category.text}</span>
          {#if $order.photos.exteriorFiles.filter(entry => entry.category === category.id).length > 0}
            <div class="ml-auto pr-1 flex items-center cursor-pointer" on:click={clearPhoto(category)}>
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
      {#if $order.photos.exteriorFiles.filter(entry => entry.category === category.id).length > 0}
        <Image src={$order.photos.exteriorFiles.filter(entry => entry.category === category.id)[0].href} alt="{category.text}"/>
      {:else}
        <Dashboard
          uppy={exteriorPhotosUppyInstance(category.id)}
          props={{
            height: 230,
            proudlyDisplayPoweredByUppy: false,
            plugins: ['ImageEditor']
          }}
        />
      {/if}
    </div>
  {/each}
</div>
