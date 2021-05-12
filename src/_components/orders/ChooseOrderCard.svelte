<script lang="ts">
  import { vendor } from '../../../stores/vendor';
  import Card from '../layout/Card.svelte';
  import Order from '../../../classes/Order';
  import encodeGoogleURL from '../../_modules/encodeGoogleURL';
  import { goto } from '@roxi/routify';

  // Props
  export let order = new Order();

  // Variables
  const street = order.address.unitNumber
    ? `${order.address.street} ${order.address.unitNumber}`
    : order.address.street

  // Functions
  function openOrder(){
    $goto("./order", {_id: order._id});
  }

  function openDirections(){
    if ($vendor.snapshotPreferences.preferredMapApp === 'Waze'){
      window.open(`https://waze.com/ul?q=${encodeURI(`${street} ${order.address.city} ${order.address.state}`)}`)
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeGoogleURL(`${street} ${order.address.city} ${order.address.state}`)}`)
    }
  }
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
        <h3 class="mb-4 font-semibold">
          {street}
          <span class="text-sm text-coolGray-400">
          ({#if order.services.rush} Rush / {/if}{#if order.services.isInterior}Interior{:else}Exterior{/if})
        </span>
        </h3>
        <h6 class="text-sm text-coolGray-400 -mt-3">
          {order.address.city}, {order.address.state}, {order.address.zip}
        </h6>

      </div>
    </div>
    <span class="text-sm text-coolGray-400">Client Instructions:</span>
    <p>{@html order.notes}</p>
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
