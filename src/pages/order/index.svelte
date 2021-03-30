<script lang="ts">
  import {order} from '../../../stores/order';
  import changeUppyTheme from './_modules/changeUppyTheme';
  import ExteriorPhotos from './_components/ExteriorPhotos.svelte';
  import InteriorPhotos from './_components/InteriorPhotos.svelte';

  console.log($order);

  setTimeout(changeUppyTheme, 180);
  window.onresize = changeUppyTheme;
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

<ExteriorPhotos />
{#if $order.services.isInterior}
  <InteriorPhotos />
{/if}
