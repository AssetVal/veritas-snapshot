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

  // Debug
  console.log($vendor);

  // Functions
  function logout() {
    $vendor = null;
    $goto(window.location.href);
  }
</script>

<style>
  .account-icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: .7;
    transition: transform 200ms ease-in-out;
  }
  .caret-icon {
    font-size: 1.3333333333em;
    line-height: .75em;
    vertical-align: -.225em;
    width: .625em;
    overflow: visible;
  }

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

  .btn-account[aria-expanded=true]>.account-icon {
    transform: rotate(180deg);
    top: 39%
  }

  .collapse:not(.show) {
    display: none;
  }

  .description {
    font-size: .875em;
    opacity: .7;
  }

  .d-item { color: #15152d; }

  .d-item:hover {
    color: #fff;
    text-decoration: none;
    background-color: #105f9e;
  }
</style>

<header class="sidebar-header">
  <button class={classes} on:click={() => sidebarOpen = false}>
    <span class="text-white text-3xl -mx-4">X</span>
  </button>
  <button
    class="p-4 w-full flex flex-row border-none items-center btn-account md:hidden lg:hidden xl:hidden focus:outline-none"
    type="button"
    aria-expanded={subDropdownOpen}
    on:click={() => (subDropdownOpen) ? (subDropdownOpen = false) : (subDropdownOpen = true)}
  >
    <span class="mr-3 w-12 h-12 text-5xl relative inline-block align-middle">
      {#if $vendor.user.imgDef}
        <img class="rounded-full" alt="User Avatar" src="https://s3.us-west-1.amazonaws.com/veritasprofile/{$vendor.user._id}-profile.webp">
      {/if}
    </span>
    <span class="account-icon">
      <svg
        class="caret-icon"
        aria-hidden="true"
        focusable="false"
        data-prefix="fa"
        data-icon="caret-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        data-fa-i2svg=""
      >
        <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
      </svg>
    </span>
    <span class="mr-3 block text-left flex-1 overflow-hidden overflow-clip">
      <span class="text-lg block overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
        {$vendor.user.name.nickname} {$vendor.user.name.last}
      </span>
      <span class="block overflow-hidden overflow-ellipsis whitespace-nowrap description">
        {$vendor.user.desc}
      </span>
    </span>
  </button>
  <div class={expandClass}>
    <div class="pb-3">
      <a href="#" class="block w-full px-4 py-2 d-item">Settings</a>
      <button class="block w-full px-4 py-2 d-item -mb-3 text-left focus:outline-none" on:click={logout}>Logout</button>
    </div>
  </div>
</header>
