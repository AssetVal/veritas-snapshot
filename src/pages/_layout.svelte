<script>
  import {vendor} from '../../stores/vendor';
  import {goto} from '@roxi/routify';
  import Header from '../../components/layout/Header.svelte';

  $: if (!$vendor) $goto("./login", {}, true);
</script>

{#if $vendor}
  <Header />
  <main class="flex flex-col items-center min-h-full">
    <div class="w-full px-4 py-6">
      <!-- routify:options preload="proximity" -->
      <slot/>
    </div>
  </main>
{/if}
