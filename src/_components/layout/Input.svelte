<script lang="ts">
  export let value = '';
  export let label = '';
</script>

<div class="m-2 relative">
  <label>{label}</label>
  <input
    required
    type="text"
    class="pt-5 px-3 pb-1 text-sm border-b-2 focus:outline-none focus:border-b-blue-primary focus:black-plum"
    value={value}>
</div>
