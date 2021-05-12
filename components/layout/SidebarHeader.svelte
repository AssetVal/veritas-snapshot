<script>
  import {vendor} from '../../stores/vendor';
  export let sidebarOpen = false;
  let classes;
  $: (sidebarOpen) ? (classes = 'close-btn show') : (classes = 'close-btn')
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
    justify-content: center;
    cursor: pointer;
    height: 2.25rem;
    width: 2.25rem;
    transition: background-color 300ms linear;
    border-radius: .25rem;
    overflow: visible;
    outline: 0;
    background: slategray;
  }

  .show { display: block; }
  .description {
    font-size: .875em;
    opacity: .7;
  }
</style>

<header class="sidebar-header">
  <div class="p-4 w-full flex flex-row border-none items-center btn-account focus:outline-none">
    <span class="mr-3 w-12 h-12 text-5xl relative inline-block align-middle">
      {#if $vendor.user.imgDef}
        <img class="rounded-full" alt="User Avatar" src="https://s3.us-west-1.amazonaws.com/veritasprofile/{$vendor.user._id}-profile.webp">
      {:else}
        {#if $vendor.user.gender === 'female'}
          <img class="rounded-full" src="https://s3.us-west-1.amazonaws.com/assetvalphotos/assets/contacts/photo_awaited_female.webp"  alt="Awaiting User Avatar">
        {:else if $vendor.user.gender === 'male'}
          <img class="rounded-full" src="https://s3.us-west-1.amazonaws.com/assetvalphotos/assets/contacts/photo_awaited_male.webp"  alt="Awaiting User Avatar">
        {:else}
          <img class="rounded-full" src="https://s3.us-west-1.amazonaws.com/assetvalphotos/assets/rsz_noimage.webp"  alt="Awaiting User Avatar">
        {/if}
      {/if}
    </span>
    <span class="mr-3 block text-left flex-1 overflow-hidden overflow-clip">
      <span class="text-lg block overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
        {$vendor.user.name.nickname}'s Account
      </span>
      <span class="block overflow-hidden overflow-ellipsis whitespace-nowrap description">
        {$vendor.user.desc}
      </span>
    </span>
    <button class={classes} on:click={() => sidebarOpen = false}>
      <span class="text-white text-3xl -mx-4">X</span>
    </button>
  </div>
</header>
