<script>
  import LogInHeader from '../../components/layout/LogInHeader.svelte';
  import LogInForm from '../../components/layout/LogInForm.svelte';
 import {vendor} from '../../stores/vendor'
</script>

<main class="flex flex-col items-center min-h-full">
  {#if $vendor}
    <!-- routify:options preload="proximity" -->
    <slot />
  {:else}
    <LogInHeader/>
    <LogInForm />
  {/if}
</main>

