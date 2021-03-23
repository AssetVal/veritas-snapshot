<script lang="ts">
  export let open = false;
  let classes;

  $: {
    if (open){
      classes = 'sidebar show';
    } else {
      classes = 'sidebar'
    }
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

</aside>
