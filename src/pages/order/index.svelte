<script lang="ts">
  import {order} from '../../../stores/order';
  import changeUppyTheme from './_modules/changeUppyTheme';
  import ExteriorPhotos from './_components/ExteriorPhotos.svelte';
  import InteriorPhotos from './_components/InteriorPhotos.svelte';
  import postToVeritas from '../../_modules/postToVeritas';
  import toastResults from '../../_modules/toastResults';
  import type Order from '../../../classes/Order';
  import {vendor} from '../../../stores/vendor';
  
  setTimeout(changeUppyTheme, 180);
  window.onresize = changeUppyTheme;

  type OrderSaveBody = {
    _id: string,
    exteriorPhotos?: Array<{name: string, note: string}>,
    interiorPhotos?: Array<{name: string, note: string}>,
  }

  const submitOrder = async(event) => {
    event.preventDefault();

    // Convert Node-List to Array
    const exteriorInputs = [...event.currentTarget.querySelectorAll('input[data-set="exterior"]')];
    const interiorInputs = [...event.currentTarget.querySelectorAll('input[data-set="interior"]')];

    // Map the values into formatted objects
    const exteriorValues = exteriorInputs.map((input: HTMLInputElement) => ({name: input.id, note: input.value}));
    const interiorValues = interiorInputs.map((input: HTMLInputElement) => ({name: input.id, note: input.value}));

    const orderSaveBody: OrderSaveBody = {_id: $order._id};

    if (exteriorValues.length > 0) orderSaveBody.exteriorPhotos = exteriorValues;
    if (interiorValues.length > 0) orderSaveBody.interiorPhotos = interiorValues;

    const {message, status, data} = await postToVeritas('snapshotSaveNotes', {order: orderSaveBody, vendor: $vendor._id});

    toastResults(status, message, () => {
      // Reassign the order with the response from Veritas to trigger updates
      $order = data;
      // Store those results on the vendor for later
      $vendor.orders.inProgress = [...$vendor.orders.inProgress.filter((order: Order) => order._id !== order._id), $order];
    });
  }
</script>

<style global>
  @import '@uppy/core/dist/style.css';
  @import '@uppy/dashboard/dist/style.css';
  @import '@uppy/image-editor/dist/style.css';

  /* Align the open cam link */
  .center-text { text-align: center !important; }
  /* Remove the underline from the open cam link, instead bold font*/
  .center-text:focus { border: none; font-weight: 600; }
  /* Remove the dotted line around each Uppy dashboard instance */
  [data-uppy-drag-drop-supported=true] .uppy-Dashboard-AddFiles { border: none !important; }
</style>

<form on:submit={submitOrder}>
  <ExteriorPhotos />

  {#if $order.services.isInterior}
    <InteriorPhotos />
  {/if}

  <div class="m-4 flex justify-center">
    <button type="submit" class="h-11 py-2 px-4 rounded border-blue-650 bg-blue-primary text-white  w-2/3 sm:w-1/3"> Save Order </button>
  </div>
</form>
