<script lang="ts">
  import {goto} from '@roxi/routify';
  import Card from '../layout/Card.svelte';
  import Order from '../../../classes/Order';
  import {vendor} from '../../../stores/vendor';
  import {
    exteriorPhotoCategories,
    exteriorPhotoCategoriesForInteriorOrders,
    optionalPhotoCategories
  } from '../../pages/order/_data/exteriorPhotoCategories';
  import encodeGoogleURL from '../../_modules/encodeGoogleURL';
  import CheckmarkIcon from '../../../components/icons/CheckmarkIcon.svelte';

  // Props
  export let order = new Order();

  // Variables
  let photoCategories = exteriorPhotoCategories;

  if (order.services.isInterior) {
    photoCategories = [
      ...exteriorPhotoCategories,
      ...exteriorPhotoCategoriesForInteriorOrders,
    ].sort(({order: a}, {order: b}) => a - b);
  }

  if (order.services.extendedExteriorPhotos) {
    photoCategories = [
      ...photoCategories,
      ...optionalPhotoCategories
    ].sort(({order: a}, {order: b}) => a - b);
  }

  // Variables
  const street = order.address.unitNumber
    ? `${order.address.street} ${order.address.unitNumber}`
    : order.address.street;

  // Functions
  function openOrder() {
    $goto('./order', {_id: order._id});
  }

  function openDirections() {
    if ($vendor.snapshotPreferences.preferredMapApp === 'Waze') {
      window.open(`https://waze.com/ul?q=${encodeURI(`${street} ${order.address.city} ${order.address.state}`)}`);
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeGoogleURL(`${street} ${order.address.city} ${order.address.state}`)}`);
    }
  }

  $: orderComplete = () => {
    if (order.services.isInterior) {
      if (order.photos.interiorFiles.filter(img => img.note != null).length === order.photos.interiorFiles.length
        && order.photos.exteriorFiles.length === photoCategories.length) {
        return true;
      }
    } else {
      if (order.photos.exteriorFiles.length === photoCategories.length) {
        return true;
      }
    }
    return false;
  };
</script>

<style>
  .footer-item {
    padding: 1rem;
    flex: 1;
    text-align: center;
    outline: 0;
  }
  .footer-item:focus, .footer-item:hover {
    color: #222230;
    text-decoration: none;
  }
  .footer-item:not(:last-child) {
    border-right: 1px solid rgba(20,20,31,.12);
  }

  .footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
  }

  .footer {
    border-top: 1px solid rgba(20,20,31,.12);
  }
</style>

<Card>
  <div slot="body">
    <div class="mb-4 flex items-center min-w-full">
      <div class="flex-1 block">
        <div class="flex justify-between">
          <h3 class="mb-4 font-semibold">
            {street}
            <span class="text-sm text-coolGray-400">
            ({#if order.services.rush} Rush / {/if}{#if order.services.isInterior}Interior{:else}Exterior{/if})
          </span>
          </h3>

          {#if orderComplete()}
            <CheckmarkIcon height="2rem" width="2rem" classes="text-green-600 mb-2 ml-2" />
          {/if}
        </div>
        <h6 class="text-sm text-coolGray-400 -mt-3">
          {order.address.city}, {order.address.state}, {order.address.zip}
        </h6>
      </div>
    </div>
    <span class="text-sm text-coolGray-400">Client Instructions:</span>
    <p>{order.notes}</p>
  </div>

  <div slot="footer" class="flex items-stretch footer">
    <button class="footer-item" type="button" on:click={openOrder}>
      Open
    </button>
    <button class="footer-item" type="button" on:click={openDirections}>
      Directions
    </button>
  </div>
</Card>
