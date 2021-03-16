<script>
  import LogInHeader from '../../components/layout/LogInHeader.svelte';
  import LogInForm from '../../components/layout/LogInForm.svelte';
  import {user} from '../../stores/user';
</script>

<main class="flex flex-col items-center min-h-full">

  {#if $user}
    <!-- routify:options preload="proximity" -->
    <slot />
  {:else}
    <LogInHeader/>
    <LogInForm />
  {/if}
</main>

