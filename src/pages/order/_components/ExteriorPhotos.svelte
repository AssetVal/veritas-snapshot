<script lang="ts">
  import Swal from 'sweetalert2';
  import {Dashboard} from '@uppy/svelte';
  import {order} from '../../../../stores/order';
  import uppyInstance from '../_modules/uppyFactory';
  import {
    exteriorPhotoCategories,
    exteriorPhotoCategoriesForInteriorOrders,
    optionalPhotoCategories
  } from '../_data/exteriorPhotoCategories';
  import HelpIcon from '../../../../components/icons/HelpIcon.svelte';
  import SubHeading from '../../../../components/layout/SubHeading.svelte';


  let photoCategories = [...exteriorPhotoCategories, ...optionalPhotoCategories];

  if ($order.services.isInterior) {
    photoCategories = [
      ...exteriorPhotoCategories,
      ...exteriorPhotoCategoriesForInteriorOrders,
      ...optionalPhotoCategories
    ].sort(({order: a}, {order: b}) => a - b)
  }
</script>

<SubHeading>Exterior Photos</SubHeading>
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
