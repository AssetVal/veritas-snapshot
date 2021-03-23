<script lang="ts">
  export let open = false;
</script>

<style>
  .hamburger {
    position: relative;
    display: flex;
    align-items: center;
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
    margin: 0 .5rem 0 0;
    overflow: visible;
    outline: 0;
  }

  .hamburger-box {
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    position: relative;
  }

  .hamburger .hamburger-inner {
    transition-duration: .075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -1px;
    width: 1.25rem;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    transition-property: transform;
  }

  .hamburger .hamburger-inner::before {
    transition: top .075s .12s ease,opacity .075s ease;
  }
  .hamburger .hamburger-inner::after {
    transition: bottom .075s .12s ease,transform .075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger-inner::before { top: -6px; }
  .hamburger-inner::after {  bottom: -6px; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before, .hamburger-inner::after {
    width: 1.25rem;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
  }
  .hamburger:hover, .hamburger:focus {
    background-color: rgba(255,255,255,.05);
    outline: 0;
  }
</style>

<button
  class="hamburger hover:text-gray-700 cursor-pointer mr-2 border-none focus:outline-none"
  class:open
  on:click={() => open = !open}
>
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
