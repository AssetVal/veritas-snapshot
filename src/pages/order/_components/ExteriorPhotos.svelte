<script lang="ts">
  import Swal from 'sweetalert2';
  import {Dashboard} from '@uppy/svelte';
  import {toast} from '@zerodevx/svelte-toast';
  import {order} from '../../../../stores/order';
  import uppyInstance from '../_modules/uppyFactory';
  import {
    exteriorPhotoCategories,
    exteriorPhotoCategoriesForInteriorOrders,
    optionalPhotoCategories,
  } from '../_data/exteriorPhotoCategories';
  import toastThemes from '../../../_modules/toastThemes';
  import type {VeritasResponse} from '../_modules/uppyFactory';
  import clearPhotosFolder from '../../../_modules/clearPhotoFolder';
  import HelpIcon from '../../../../components/icons/HelpIcon.svelte';
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';
  import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';
  import Image from '../../../../components/layout/Image.svelte';
  import {vendor} from '../../../../stores/vendor';
  import Order from '../../../../classes/Order';

  let photoCategories = [...exteriorPhotoCategories, ...optionalPhotoCategories];

  if ($order.services.isInterior) {
    photoCategories = [
      ...exteriorPhotoCategories,
      ...exteriorPhotoCategoriesForInteriorOrders,
      ...optionalPhotoCategories
    ].sort(({order: a}, {order: b}) => a - b)
  }

  const exteriorPhotosUppyInstance = (category: photoCategoryIDs) => {
    const uppy = uppyInstance(1, $order, category);

    uppy.on('complete', async (result): Promise<void> => {
      console.log('successful files:', result.successful);
      console.log('failed files:', result.failed);

      if (result.successful.length > 0) {
        if (result.successful.length === 1) { // Exterior Photo
          const exteriorPhoto = result.successful[0];
          const {status, message, href}: VeritasResponse = exteriorPhoto.response.body;

          if (status === 'success') {
            toast.push(message, toastThemes.success);
            $order.photos.exteriorFiles = [...$order.photos.exteriorFiles, {name: href as string, category: category}]
            $vendor?.orders.inProgress = [...$vendor?.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];

          } else if (status === 'error') {
            toast.push(message, toastThemes.error)
          } else {
            toast.push(message)
          }
        }
      }
    });
    return uppy;
  }

  const clearExteriorPhotos = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete all exterior photos!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        const {status, message, data} = await clearPhotosFolder('exterior', $order)

        if (status === 'success') {
          toast.push(message, toastThemes.success);
          $order = data;
        } else if (status === 'error') {
          toast.push(message, toastThemes.error)
        } else {
          toast.push(message)
        }
      }
    })
  }
</script>

<div class="flex f-row">
  <header class="mt-3 mb-1 p-0 block">
    <h1 class="mt-0 mr-auto text-3xl font-semibold mb-2">
      Exterior Photos
    </h1>
  </header>
  <div class="ml-auto flex items-center">
    <div class="rounded-full bg-dark-transparent h-8 w-8 flex items-center justify-center cursor-pointer" on:click={clearExteriorPhotos}>
      <TrashIcon height="1.4rem" width="1.4rem" />
    </div>
  </div>
</div>

<div class="h-full grid grid-cols-2 gap-3">
  {#each photoCategories as category, index}
    <div>
      <div class="flex justify-center">
        <div class="rounded-md bg-blue-primary-dark text-white w-full flex flex-row justify-center">
          <div>&nbsp;</div>
          <span class="text-center ml-auto ">{category.text}</span>
          <div class="ml-auto pr-1 flex items-center cursor-pointer" on:click={() => {
            Swal.fire({
              title: category.text,
              text: category.hint,
              icon: 'info'
            })
          }}>
            <HelpIcon classes="h-5 w-5"/>
          </div>
        </div>
      </div>
      {#if $order.photos.exteriorFiles.filter(entry => entry.category === category.id).length > 0}
        <Image src={$order.photos.exteriorFiles.filter(entry => entry.category === category.id)[0].name} alt="{category.text}"/>
      {:else}
        <Dashboard
          uppy={exteriorPhotosUppyInstance(category.id)}
          props={{
          inline: true,
          height: 230,
          proudlyDisplayPoweredByUppy: false,
        }}
        />
      {/if}
    </div>
  {/each}
</div>
