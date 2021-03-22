<script>
  import { vendor } from '../../stores/vendor'
  import { goto } from '@roxi/routify';

  $: if (!$vendor) $goto("./login", {}, true);
</script>

{#if $vendor}
  <main class="flex flex-col items-center min-h-full">
    <!-- routify:options preload="proximity" -->
    <slot/>
  </main>
{/if}
