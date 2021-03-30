<script lang="ts">
  import { Dashboard } from '@uppy/svelte';
  import { order } from '../../../stores/order';
  import uppyInstance from './_modules/uppyFactory';
  import changeUppyTheme from './_modules/changeUppyTheme';

  console.log($order)

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
  ];

  setTimeout(changeUppyTheme, 180);
  window.onresize = changeUppyTheme
</script>

<style global>
  @import '@uppy/core/dist/style.css';
  @import '@uppy/dashboard/dist/style.css';

  /* Align the open cam link */
  .center-text { text-align: center !important; }
  /* Remove the underline from the open cam link, instead bold font*/
  .center-text:focus {
    border: none;
    font-weight: 600;
  }
  /* Remove the dotted line around each Uppy dashboard instance */
  [data-uppy-drag-drop-supported=true] .uppy-Dashboard-AddFiles { border: none !important; }
</style>

<div class="h-full grid grid-cols-2 gap-3 pt-4">
  {#each exteriorPhotoCategories as category, index}
    <div class="">
      <div class="flex justify-center">
        <small class="text-center">{category.text}</small>
      </div>
      <Dashboard
        uppy={uppyInstance()}
        props={{
        inline: true,
        height: 230,
        proudlyDisplayPoweredByUppy: false,
      }}
      />
    </div>
  {/each}
</div>

