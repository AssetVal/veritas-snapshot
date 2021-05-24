<script lang="ts">
  import {vendor} from '../../stores/vendor';
  import ChooseOrderCard from '../_components/orders/ChooseOrderCard.svelte';
  import SubHeading from '../../components/layout/SubHeading.svelte';
  import Wrapper from '../../components/layout/Wrapper.svelte';
  import Card from '../_components/layout/Card.svelte';
</script>

<!-- routify:option name="Veritas-Snapshot" -->

<SubHeading>
  Orders
  <small class="text-base text-coolGray-400 text-center">{$vendor.orders.inProgress.length} Total</small>
</SubHeading>

<Wrapper>
  {#if $vendor.orders.inProgress.length > 0}
    {#each $vendor.orders.inProgress as order}
      <ChooseOrderCard order={order}/>
    {/each}
  {:else}
    <Card>
      <h3 slot="body">No orders currently in progress</h3>
    </Card>
  {/if}
</Wrapper>
