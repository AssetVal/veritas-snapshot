<script>
  import {vendor} from '../../stores/vendor';

  console.log(vendor)

  export let sidebarOpen = false;

  let classes;

  $: {
    if (sidebarOpen){
      classes = 'close-btn show'
    } else {
      classes = 'close-btn'
    }
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
    top: .75rem;
    right: -3rem;
    justify-content: center;
    cursor: pointer;
    height: 2.25rem;
    width: 2.25rem;
    transition: background-color 300ms linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    border-radius: .25rem;
    overflow: visible;
    outline: 0;
  }

  .show { display: block; }

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
</style>

<header class="sidebar-header">
  <button class={classes} on:click={() => sidebarOpen = false}>
    <span class="text-white font-semibold text-3xl -ml-4">X</span>
  </button>
  <button class="p-4 w-full flex flex-row border-none items-center md:hidden lg:hidden xl:hidden">
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
      <span class="text-lg block overflow-hidden overflow-ellipsis whitespace-nowrap text-semibold">
        {$vendor.user.name.nickname} {$vendor.user.name.last}
      </span>
      <span class="text-xs block overflow-hidden overflow-ellipsis whitespace-nowrap">
        {$vendor.user.desc}
      </span>
    </span>
  </button>
  <div class="dropdown-aside collapsed">
    <div class="pb-3">

    </div>
  </div>
</header>
