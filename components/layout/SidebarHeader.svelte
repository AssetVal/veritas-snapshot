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
    padding: .5rem .5rem;
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
    margin: 0;
    overflow: visible;
    outline: 0;
  }

  .show {
    display: block;
  }
</style>

<header class="sidebar-header">
  <button class={classes} on:click={() => sidebarOpen = false}>
    X
  </button>
  <button class="p-4 w-full justify-start border-none items-center">
    <span class="mr-3 w-12 h-12 text-5xl relative inline-block align-middle">
      <img class="rounded-full" alt="User Avatar" src="https://s3.us-west-1.amazonaws.com/veritasprofile/5debc2253a55a56914d37edf-profile.webp">
    </span>
  </button>
</header>
