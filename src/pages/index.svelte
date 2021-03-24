<script lang="ts">
  import {vendor} from '../../stores/vendor';
  import ChooseOrderCard from '../_components/chooseOrder/ChooseOrderCard.svelte';
  import Card from '../_components/layout/Card.svelte';
  import SubHeading from '../../components/layout/SubHeading.svelte';
</script>

<SubHeading>
  Orders
  <small class="text-base text-coolGray-400 text-center">{$vendor.orders.inProgress.length} Total</small>
</SubHeading>

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
