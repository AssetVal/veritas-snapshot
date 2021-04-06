<script lang="ts">
  import uppyInstance from '../_modules/uppyFactory';
  import {Dashboard} from '@uppy/svelte';
  import {order} from '../../../../stores/order';
  import SubHeading from '../../../../components/layout/SubHeading.svelte';
</script>

<SubHeading>Interior Photos</SubHeading>
<div class="h-full grid grid-cols-1 gap-3">
  <Dashboard
    uppy={uppyInstance(50, $order._id, 'None')}
    props={{
      inline: true,
      height: 300,
      proudlyDisplayPoweredByUppy: false,
    }}
  />
</div>
