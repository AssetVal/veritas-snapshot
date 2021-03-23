<script lang="ts">
  import {vendor} from '../../stores/vendor';
  import ChooseOrderCard from '../_components/chooseOrder/ChooseOrderCard.svelte';
  import Card from '../_components/layout/Card.svelte';
  import ChooseOrderHeader from '../_components/chooseOrder/ChooseOrderHeader.svelte';
</script>

<ChooseOrderHeader totalOrders={$vendor.orders.inProgress.length}/>

<div class="h-full relative flex flex-wrap -mx-2.5">
  {#if $vendor.orders.inProgress.length > 0}
    {#each $vendor.orders.inProgress as order}
      <ChooseOrderCard order={order}/>
    {/each}
  {:else}
    <Card>
      <h3>No orders in progress</h3>
    </Card>
  {/if}
</div>
