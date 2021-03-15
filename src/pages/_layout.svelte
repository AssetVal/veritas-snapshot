<script>
  import LogInHeader from '../../components/layout/LogInHeader.svelte';
</script>

<main class="flex flex-col items-center min-h-full">
  <LogInHeader/>
  <!-- routify:options preload="proximity" -->
  <slot />
</main>

