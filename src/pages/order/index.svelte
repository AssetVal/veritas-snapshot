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
    {text: 'Front View', id: 'frontView', required: true},
    {text: 'Front Angled View', id: 'frontAngledView', required: true},
    {text: 'Front View Right', id: 'frontViewRight', required: true},
    {text: 'Front View Left', id: 'frontViewLeft', required: true},
    {text: 'Street View', id: 'streetView', required: true},
    {text: 'Opposite Street View', id: 'oppositeStreetView', required: true},
    {text: 'Right Side of Dwelling', id: 'rightSideOfDwelling', required: true},
    {text: 'Left Side of Dwelling', id: 'leftSideOfDwelling', required: true},
    {text: 'Rear of Dwelling', id: 'rearOfDwelling', required: true},
    {text: 'Backyard', id: 'backyard', required: true},
    {text: 'Address Verification', id: 'addressVerification', required: true},
    {text: 'Exterior', id: 'exterior', required: false}
  ]

  setTimeout(() => {
    document.querySelectorAll('.uppy-Dashboard-AddFiles-title').forEach(el => {
      el.childNodes[0].textContent = 'Click here';
      el.childNodes[1].textContent = 'to browse or shoot';
    });
  }, 180)
</script>

<style global>
  @import '@uppy/core/dist/style.css';
  @import '@uppy/dashboard/dist/style.css';
</style>

<div class="h-full grid grid-cols-2 gap-3">
  {#each exteriorPhotoCategories as category, index}
    <div class="">
      <div class="flex justify-center">
        <small class="text-center">{category.text}</small>
      </div>
      <Dashboard
        uppy={uppyInstance()}
        props={{
        inline: true,
        height: 225,
        proudlyDisplayPoweredByUppy: false,
        note: `${category.text}; Up to 10mb;`
      }}
      />
    </div>
  {/each}
</div>

