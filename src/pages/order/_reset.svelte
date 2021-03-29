<script lang="ts">
  import Sidebar from '../../../components/layout/Sidebar.svelte';
  import Header from '../../../components/layout/Header.svelte';
  import {vendor} from '../../../stores/vendor';
  import {goto} from '@roxi/routify';
  import {params} from '@roxi/routify';
  import { order } from '../../../stores/order';
  import Order from '../../../classes/Order';

  $order = $vendor?.orders.inProgress.filter((order: Order) => order._id === $params._id)[0];

  let sidebarOpen = false;

  $: if (!$vendor) $goto("../login",);
</script>

{#if $vendor}
  <Header bind:sidebar={sidebarOpen}>
    <div class="bg-dark-transparent flex flex-col px-3 -ml-2 h-full opacity-90" slot="infoArea">
      {#if $order?.address.street}
        <span class="text-xl text-white opacity-100">
          {$order.address.street}{#if $order.address.unitNumber}, {$order.address.unitNumber}{/if}
        </span>
      {/if}
      {#if $order?.address.city}
        <small class="text-lg text-white">
          {$order?.address.city}, {$order?.address.state}, {$order?.address.zip}
        </small>
      {/if}
    </div>
  </Header>
  <Sidebar bind:open={sidebarOpen}/>
  <main class="flex flex-col items-center min-h-full mt-8" on:click={() => sidebarOpen = false}>
    <div class="w-full px-4 py-6">
      <!-- routify:options preload="proximity" -->
      <slot/>
    </div>
  </main>
{/if}
