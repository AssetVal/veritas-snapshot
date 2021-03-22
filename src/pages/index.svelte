<script lang="ts">
  import {vendor} from '../../stores/vendor';
  import {goto} from '@roxi/routify';
  import ChooseOrderCard from '../_components/chooseOrder/ChooseOrderCard.svelte';
  import Card from '../_components/layout/Card.svelte';
  import ChooseOrderHeader from '../_components/chooseOrder/ChooseOrderHeader.svelte';

  async function logout() {
    $vendor = false;
    /** We want to $goto our current location.
     *  Since we're now logged in, we shouldn't be redirected to this login page again.  **/
    $goto(window.location.href);
  }
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

<button
  class="h-11 py-2 px-4 rounded border-blue-650 bg-blue-primary text-white mt-4 focus:outline-none"
  on:click={logout}>
  Log Out {$vendor.user.name.first}
</button>
