<script lang="ts">
  import {goto} from '@roxi/routify';
  import {params} from '@roxi/routify';
  import type Order from '../../../classes/Order';
  import {order} from '../../../stores/order';
  import {vendor} from '../../../stores/vendor';
  import {SvelteToast} from '@zerodevx/svelte-toast';
  import Header from '../../../components/layout/Header.svelte';
  import abbreviateState from '@assetval/state-switcher';
  import Sidebar from '../../../components/layout/Sidebar.svelte';
  import BackIcon from '../../../components/icons/BackIcon.svelte';
  import EditorModal from '../../../components/layout/EditorModal.svelte';

  $: if ($vendor._id === 'noUser'){ $goto('../login') };
  $: if ($vendor._id !== 'noUser') $order = $vendor.orders.inProgress.filter((order: Order) => order._id === $params._id)[0];

  let sidebarOpen = false;
</script>

<style>
  .h-fit {height: fit-content}
</style>

{#if $vendor._id !== 'noUser'}
  <SvelteToast />
  <Header bind:sidebar={sidebarOpen}>
    <div class="flex flex-row justify-between w-full" slot="infoArea">
      <div class="bg-dark-transparent flex flex-col px-3 -ml-2 h-full opacity-90">
        {#if $order.address.street}
        <span class="text-xl text-white opacity-100">
          {$order.address.street}{#if $order.address?.unitNumber}, {$order.address.unitNumber}{/if}
        </span>
        {/if}
        {#if $order.address.city}
          <small class="text-lg text-white">
            {$order.address.city}, {abbreviateState($order.address.state)}, {$order.address.zip}
          </small>
        {/if}
      </div>
      <div
        class="bg-dark-transparent rounded-full h-fit my-auto mr-4 cursor-pointer"
        on:click={() => $goto('/')}
      >
        <BackIcon
          colorClass="text-white"
          height="2rem"
          width="2rem"
        />
      </div>
    </div>
  </Header>
  <Sidebar bind:open={sidebarOpen}/>
  <EditorModal />
  <main class="flex flex-col items-center min-h-full mt-8" on:click={() => sidebarOpen = false}>
    <div class="lg:w-3/5 w-full px-4 py-6">
      <!-- routify:options preload="proximity" -->
      <slot/>
    </div>
  </main>
{/if}
