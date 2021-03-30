<script lang="ts">
  import Uppy from '@uppy/core';
  import {Dashboard} from '@uppy/svelte';
  import SubHeading from '../../../../components/layout/SubHeading.svelte';

  const uppy = new Uppy({
    autoProceed: true,
    restrictions: {
      maxFileSize: 10000000,
      allowedFileTypes: ['image/*']
    }});
</script>

<SubHeading>Interior Photos</SubHeading>
<div class="h-full grid grid-cols-1 gap-3">
  <Dashboard
    uppy={uppy}
    props={{
      inline: true,
      height: 300,
      proudlyDisplayPoweredByUppy: false,
    }}
  />
</div>
