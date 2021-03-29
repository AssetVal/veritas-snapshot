<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import Uppy from '@uppy/core';
  import {params} from '@roxi/routify';
  import {vendor} from '../../../stores/vendor';
  import Order from '../../../classes/Order';
  import SubHeading from '../../../components/layout/SubHeading.svelte';

  let order: Order = $vendor.orders.inProgress.filter((order: Order) => order._id === $params._id)[0];
  const uppyInstance = () => new Uppy({
    autoProceed: true,
    restrictions: {
      maxFileSize: 10000000,
      maxNumberOfFiles: 1,
      allowedFileTypes: ['image/*']
    }});

  const exteriorPhotoCategories = [
    {text: 'Front View', id: 'frontView'},
    {text: 'Front Angled View', id: 'frontAngledView'},
    {text: 'Street View', id: 'streetView'},
    {text: 'Address Verification', id: 'addressVerification'},
  ]
</script>

<style global>
  @import '@uppy/core/dist/style.css';
  @import '@uppy/dashboard/dist/style.css';
</style>

<SubHeading>
  <h1>{order.address.street}</h1>
</SubHeading>

<div class="h-full">
  {#each exteriorPhotoCategories as category, index}
    <h1>{category.text}</h1>
    <Dashboard
      uppy={uppyInstance()}
      props={{
        height: 350,
        proudlyDisplayPoweredByUppy: false,
        note: `${category.text}; Up to 10mb;`
      }}
    />
  {/each}
</div>

