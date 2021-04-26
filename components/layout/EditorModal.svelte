<script lang="ts">
  import editorExpanded from '../../stores/editor';
</script>

<style>
  .z-top {
    z-index: 999999999;
  }
</style>


<div class={$editorExpanded ? 'block fixed h-full w-full flex justify-center content-center z-top -mt-8' : 'hidden'} id="EditorModal">

</div>
