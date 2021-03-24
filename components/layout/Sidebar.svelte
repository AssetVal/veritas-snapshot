<script lang="ts">
  import SidebarHeader from './SidebarHeader.svelte';
  import { goto } from '@roxi/routify';
  export let open = false;
  let classes;

  $: (open) ? (classes = 'sidebar show') : (classes = 'sidebar')

  function goHome(){
    open = false;
    $goto('../', {}, true)
  }
</script>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    width: calc(100vw - 3.5rem);
    max-width: calc(15rem + 1.5rem);
    z-index: 1050;
    transform: translate3d(-100%, 0, 0);
    backface-visibility: hidden;
    transition: transform 200ms ease-in-out;
    color: inherit;
    background-color: #ececec;
  }

  .sidebar.show {
    transform: translate3d(0, 0, 0);
  }
</style>

<aside class={classes}>
  <div class="flex flex-col h-full">
    <SidebarHeader bind:sidebarOpen={open}/>
    <div class="flex-1 relative overflow-hidden">
      <nav class="pt-4 pb-1 mb-4 w-full bg-transparent">
        <ul class="block list-none">
          <li on:click={goHome}>
            <span class="pr-6 pl-4 py-2 overflow-hidden text-lg">
              Home
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</aside>
