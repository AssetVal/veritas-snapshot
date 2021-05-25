<script lang="ts">
  import editorExpanded from '../../stores/editor';
</script>

<style>
  /* This just makes sure the modal appears above everything */
  .z-top { z-index: 999999999; }
  .w-95 { width: 95% }
</style>


<div class={$editorExpanded ? 'fixed h-full w-full flex justify-center content-center z-top -mt-8 mx-auto' : 'hidden'}>
  <div class={$editorExpanded ? 'w-95 flex justify-center content-center mx-auto' : 'hidden'} id="EditorModal">

  </div>
</div>

