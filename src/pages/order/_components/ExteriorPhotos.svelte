<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import uppyInstance from '../_modules/uppyFactory';
  import SubHeading from '../../../../components/layout/SubHeading.svelte';

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
</script>

<SubHeading>Exterior Photos</SubHeading>
<div class="h-full grid grid-cols-2 gap-3">
  {#each exteriorPhotoCategories as category, index}
    <div>
      <div class="flex justify-center">
        <small class="text-center">{category.text}</small>
      </div>
      <Dashboard
        uppy={uppyInstance(category.id)}
        props={{
          inline: true,
          height: 230,
          proudlyDisplayPoweredByUppy: false,
        }}
      />
    </div>
  {/each}
</div>
