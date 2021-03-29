<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import { order } from '../../../stores/order';
  import Uppy from '@uppy/core';

  console.log($order)
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

