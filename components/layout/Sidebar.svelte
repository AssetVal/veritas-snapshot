<script lang="ts">
  import SidebarHeader from './SidebarHeader.svelte';
  import { goto, isActive } from '@roxi/routify';
  import {vendor} from '../../stores/vendor';
  import HomeIcon from '../icons/HomeIcon.svelte';
  import CogIcon from '../icons/CogIcon.svelte';
  import LogOutIcon from '../icons/LogOutIcon.svelte';
  import Vendor from '../../classes/Vendor';

  export let open = false;
  let classes;

  $: (open) ? (classes = 'sidebar show') : (classes = 'sidebar')

  // Functions
  function goHome() {
    open = false;
    $goto('/')
  }

  function logout() {
    $vendor = new Vendor();
    $goto(window.location.href);
  }

  function goToSettings() {
    open = false;
    $goto("/settings");
  }
</script>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    width: 100vw;
    z-index: 1050;
    transform: translate3d(-100%, 0, 0);
    backface-visibility: hidden;
    transition: transform 200ms ease-in-out;
    color: inherit;
    background-color: #ececec;
  }

  .sidebar.show { transform: translate3d(0, 0, 0); }

  .active {
    font-weight: bold;
    stroke-width: 4;
  }
</style>

<aside class={classes}>
  <div class="flex flex-col h-full">
    <SidebarHeader bind:sidebarOpen={open}/>
    <div class="flex-1 relative overflow-hidden">
      <nav class="pt-4 pb-1 mb-4 w-full bg-transparent">
        <ul class="block list-none">
          <li on:click={goHome} class="cursor-pointer flex flex-row d-item {$isActive('/', true) ? 'active' : ''}" >
            <div class="flex items-center pl-3 pr-2">
              <HomeIcon />
            </div>
            <span class="py-2 overflow-hidden text-lg"> Home </span>
          </li>

          <li on:click={goToSettings} class="cursor-pointer flex flex-row d-item {$isActive('./settings', true) ? 'active' : ''}">
            <div class="flex items-center pl-3 pr-2">
              <CogIcon />
            </div>
            <span class="py-2 overflow-hidden text-lg"> Settings </span>
          </li>

          <li on:click={logout} class="cursor-pointer flex flex-row d-item">
            <div class="flex items-center pl-3 pr-2">
              <LogOutIcon />
            </div>
            <span class="py-2 overflow-hidden text-lg"> Logout </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</aside>
