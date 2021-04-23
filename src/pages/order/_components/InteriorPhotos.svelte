<script lang="ts">
  import Swal from 'sweetalert2';
  import uppyInstance from '../_modules/uppyFactory';
  import {Dashboard} from '@uppy/svelte';
  import {order} from '../../../../stores/order';
  import {toast} from '@zerodevx/svelte-toast';
  import clearPhotosFolder from '../../../_modules/clearPhotoFolder';
  import toastThemes from '../../../_modules/toastThemes';
  import TrashIcon from '../../../../components/icons/TrashIcon.svelte';

  const clearInteriorPhotos = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete all interior photos!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        const {status, message, data} = await clearPhotosFolder('interior', $order)

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
