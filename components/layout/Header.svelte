<script>
  import Logo from './Logo.svelte';
  import Hamburger from '../icons/Hamburger.svelte';

  export let sidebar = false;
</script>

<style>
  .app-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 3.5rem;
    z-index: 1030;
    box-shadow: 0 0 0 1px rgb(20 20 31 / 5%), 0 1px 3px 0 rgb(20 20 31 / 15%);
    display: flex;
    width: 100%;
    align-items: stretch;
    font-size: .875rem;
  }

  .bg-blue-header {background: #1d4568}
</style>

<header class="app-header">
  <div class="w-auto px-2 bg-blue-primary-dark flex items-center hidden md:flex lg:flex xl:flex 2xl:flex">
    <Hamburger bind:open={sidebar}/>
    <Logo />
  </div>
  <div class="flex flex-1 items-center bg-blue-header">
    <div class="flex items-center px-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
      <Hamburger bind:open={sidebar}/>
    </div>
    {#if $$slots.infoArea}
      <slot name="infoArea" />
    {/if}
  </div>
</header>
