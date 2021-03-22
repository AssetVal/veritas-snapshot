<script lang="ts">
  import Card from '../layout/Card.svelte';
  import Order from '../../../classes/Order';

  // Props
  export let order = new Order();

  // Variables
  const street = order.address.unitNumber
    ? `${order.address.street} ${order.address.unitNumber}`
    : order.address.street
</script>

<Card>
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
  <p>{order.notes}</p>
  <hr />
</Card>
