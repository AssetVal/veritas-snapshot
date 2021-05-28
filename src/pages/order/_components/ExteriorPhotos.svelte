<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import {
    exteriorPhotoCategories,
    exteriorPhotoCategoriesForInteriorOrders,
    optionalPhotoCategories,
  } from '../_data/exteriorPhotoCategories';
  import type Order from '../../../../classes/Order';
  import {order} from '../../../../stores/order';
  import {vendor} from '../../../../stores/vendor';
  import {exteriorUppyInstance} from '../_modules/uppyFactory';
  import ExteriorHeader from './ExteriorHeader.svelte';
  import editorExpanded from '../../../../stores/editor';
  import toastResults from '../../../_modules/toastResults';
  import Input from '../../../_components/layout/Input.svelte';
  import Image from '../../../../components/layout/Image.svelte';
  import ExteriorPhotoTitlebar from './ExteriorPhotoTitlebar.svelte';
  import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';
  import type { APIResponse } from '../../../_modules/APIResponse';
  import ImageCard from '../../../../components/layout/ImageCard.svelte';

  let photoCategories = exteriorPhotoCategories;

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
    const uppy = exteriorUppyInstance($order, category);

    // If they open the photo editor, expand our editor modal
    uppy.on('file-editor:start', () => { editorExpanded.update(n => n = true); });

    // When they finish or close editing, close the editor modal
    uppy.on('file-editor:complete', () => { editorExpanded.update(n => n = false); });

    // On finish upload look for success
    uppy.on('complete', async (result): Promise<void> => {
      if (result.successful.length > 0) {
        const exteriorPhoto = result.successful[0];
        const {status, message, data} = exteriorPhoto.response.body as APIResponse;
        console.log(exteriorPhoto.response.body)

        toastResults(status, message, () => {
          $order = data;
          $vendor.orders.inProgress = [...$vendor.orders.inProgress.filter((order: Order) => order._id !== data._id), $order];
        });
      } else {
        console.log(result)
      }
    });
    return uppy;
  };
</script>

<ExteriorHeader categories={photoCategories} />
<div class="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
  {#each photoCategories as category, index}
    <div class="h-2/3">
      <ExteriorPhotoTitlebar {category} />
      {#if category.id !== 'addendum' && $order.photos.exteriorFiles.filter(entry => entry.category === category.id).length > 0}
        <Image src={$order.photos.exteriorFiles.filter(entry => entry.category === category.id)[0].href} alt="{category.text}"/>
      {:else if category.id === 'addendum' && $order.photos.exteriorFiles.filter(entry => entry.category === 'addendum').length > 0}
        {#each $order.photos.exteriorFiles.filter(entry => entry.category === 'addendum') as photo}
          <ImageCard>
            <Image src={photo.href} slot="img" />
            <div slot="content">
              <Input label="Notes / Details" id={photo.name} value={photo?.note ?? ''} set="exterior"/>
            </div>
          </ImageCard>
        {/each}
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
