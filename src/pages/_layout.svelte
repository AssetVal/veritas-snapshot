<script lang="ts">
  import { goto } from '@roxi/routify';
  import { vendor } from '../../stores/vendor';
  import Header from '../../components/layout/Header.svelte';
  import Sidebar from '../../components/layout/Sidebar.svelte';

  let sidebarOpen = false;

  $: if (!$vendor) $goto("./login", {}, true);
</script>

{#if $vendor}
  <Header bind:sidebar={sidebarOpen}/>
  <Sidebar bind:open={sidebarOpen}/>
  <main class="flex flex-col items-center min-h-full mt-8" on:click={() => sidebarOpen = false}>
    <div class="w-full px-4 py-6">
      <!-- routify:options preload="proximity" -->
      <slot/>
    </div>
  </main>
{/if}

