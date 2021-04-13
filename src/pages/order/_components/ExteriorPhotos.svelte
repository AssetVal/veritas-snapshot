<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import {order} from '../../../../stores/order';
  import uppyInstance from '../_modules/uppyFactory';
  import exteriorPhotoCategories from '../_data/exteriorPhotoCategories';
  import SubHeading from '../../../../components/layout/SubHeading.svelte';
</script>

<SubHeading>Exterior Photos</SubHeading>
<div class="h-full grid grid-cols-2 gap-3">
  {#each exteriorPhotoCategories as category, index}
    <div>
      <div class="flex justify-center">
        <small class="text-center">{category.text}</small>
      </div>
      <Dashboard
        uppy={uppyInstance(1, $order._id, category.id)}
        props={{
          inline: true,
          height: 230,
          proudlyDisplayPoweredByUppy: false,
        }}
      />
    </div>
  {/each}
</div>
