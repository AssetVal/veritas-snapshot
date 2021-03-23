<script>
  import {vendor} from '../../stores/vendor';
  import Caret from '../icons/Caret.svelte';
  import {goto} from '@roxi/routify';
  // Props
  export let sidebarOpen = false;
  // Variables
  let classes;
  let expandClass;
  let subDropdownOpen = false;
  // Reactive
  $: (sidebarOpen) ? (classes = 'close-btn show') : (classes = 'close-btn')
  $: (subDropdownOpen) ? (expandClass = 'dropdown-aside show bg-white') : (expandClass = 'dropdown-aside collapse')

  // Work
  console.log($vendor);

  // Functions
  function logout() {
    $vendor = null;
    $goto(window.location.href);
  }
</script>

<style>
  .sidebar-header {
    position: relative;
    display: block;
    box-shadow: 0 0 0 1px rgb(20 20 31 / 5%), 0 1px 3px 0 rgb(20 20 31 / 15%);
    z-index: 3;
    background-color: #fff;
  }

  .close-btn {
    display: none;
    position: absolute;
    top: .55rem;
    right: -2.6rem;
    justify-content: center;
    cursor: pointer;
    height: 2.25rem;
    width: 2.25rem;
    transition: background-color 300ms linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    border: 0;
    border-radius: .25rem;
    overflow: visible;
    outline: 0;
    background: slategray;
  }

  .dropdown-aside {
    position: absolute;
    width: 100%;
    box-shadow: 0 0 0 1px rgb(20 20 31 / 5%), 0 1px 3px 0 rgb(20 20 31 / 15%);
    z-index: 1;
  }

  .dropdown-aside.show {
    max-height: calc(100vh - 4.5rem);
    overflow: auto;
  }

  .show { display: block; }

  .btn-account[aria-expanded=true]::before {
    background-color: #fff;
    content: "";
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  .btn-account[aria-expanded=true]>.account-icon>.caret-icon {
    transform: rotate(180deg);
  }

  .collapse:not(.show) {
    display: none;
  }
</style>

<header class="sidebar-header">
  <button class={classes} on:click={() => sidebarOpen = false}>
    <span class="text-white text-3xl -mx-4">X</span>
  </button>
  <button
    class="p-4 w-full flex flex-row border-none items-center btn-account md:hidden lg:hidden xl:hidden"
    type="button"
    aria-expanded={subDropdownOpen}
    on:click={() => (subDropdownOpen) ? (subDropdownOpen = false) : (subDropdownOpen = true)}
  >
    <span class="mr-3 w-12 h-12 text-5xl relative inline-block align-middle">
      {#if $vendor.user.imgDef}
        <img class="rounded-full" alt="User Avatar" src="https://s3.us-west-1.amazonaws.com/veritasprofile/{$vendor.user._id}-profile.webp">
      {/if}
    </span>
    <Caret />
    <span class="mr-3 block text-left flex-1 overflow-hidden overflow-clip">
      <span class="text-lg block overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
        {$vendor.user.name.nickname} {$vendor.user.name.last}
      </span>
      <span class="text-xs block overflow-hidden overflow-ellipsis whitespace-nowrap">
        {$vendor.user.desc}
      </span>
    </span>
  </button>
  <div class={expandClass}>
    <div class="pb-3">
      <a href="#" class="block w-full px-4 py-2 d-item">Settings</a>
      <button class="block w-full px-4 py-2 d-item" on:click={logout}>Logout</button>
    </div>
  </div>
</header>
