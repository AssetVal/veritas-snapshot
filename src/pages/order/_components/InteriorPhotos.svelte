<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import Order from '../../../../classes/Order';
  import {order} from '../../../../stores/order';
  import {vendor} from '../../../../stores/vendor';
  import uppyInstance from '../_modules/uppyFactory';
  import InteriorHeader from './InteriorHeader.svelte';
  import editorExpanded from '../../../../stores/editor';
  import extraPhotos from '../../../../stores/extraPhotos';
  import toastResults from '../../../_modules/toastResults';
  import Image from '../../../../components/layout/Image.svelte';
  import ImageCard from '../../../../components/layout/ImageCard.svelte';
  import Input from '../../../_components/layout/Input.svelte';

  const interiorUppy = () => {
    // Create a new Uppy instance
    const uppy = uppyInstance(50, $order);
    // If they open the photo editor, expand our editor modal
    uppy.on('file-editor:start', () => {
      editorExpanded.update(n => n = true);
    });
    // When they finish or close editing, close the editor modal
    uppy.on('file-editor:complete', () => {
      editorExpanded.update(n => n = false);
    });
    // On finish upload look for success
    uppy.on('complete', async (result): Promise<void> => {
      console.log('successful files:', result.successful);
      console.log('failed files:', result.failed);

      if (result.successful.length > 0) {
        extraPhotos.update(n => n = false)
        const interiorPhotos = result.successful;
        const {status, message, data} = interiorPhotos[interiorPhotos.length - 1].response.body;

        toastResults(status, message, () => {
          $order = data;
          $vendor.orders.inProgress = [...$vendor.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];
        });
      }
    });
    return uppy;
  }

  const saveInteriorRoom = (event) => {
    event.preventDefault();

    console.log(event.currentTarget.querySelector('input').value)
  }
</script>

<InteriorHeader />

{#if $order.photos.interiorFiles.length > 0}
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
    {#each $order.photos.interiorFiles as photo}
      <ImageCard>
        <Image src={photo.href} slot="img" />
        <form slot="content" on:submit={saveInteriorRoom}>
          <Input label="What room is this?" />
        </form>
      </ImageCard>
    {/each}
  </div>
{:else} <!-- No interior photos uploaded yet so show uppy -->
  <div class="h-full flex justify-center">
    <Dashboard
      uppy={interiorUppy()}
      props={{
      inline: true,
      height: 300,
      proudlyDisplayPoweredByUppy: false,
      plugins: ['ImageEditor']
    }}
    />
  </div>
{/if}

<!-- extraPhotos is triggered when they add more photos to interior -->
{#if $extraPhotos}
  <div class="h-full flex justify-center mt-4">
    <Dashboard
      uppy={interiorUppy()}
      props={{
      inline: true,
      height: 300,
      proudlyDisplayPoweredByUppy: false,
      plugins: ['ImageEditor']
    }}
    />
  </div>
{/if}
