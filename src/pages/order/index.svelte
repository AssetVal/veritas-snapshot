<script lang="ts">
  import {Dashboard} from '@uppy/svelte';
  import Uppy from '@uppy/core';
  import {params} from '@roxi/routify';
  import {vendor} from '../../../stores/vendor';
  import Order from '../../../classes/Order';
  import SubHeading from '../../../components/layout/SubHeading.svelte';

  let order: Order = $vendor.orders.inProgress.filter((order: Order) => order._id === $params._id)[0];
  let uppy = new Uppy();
</script>

<style global>
  @import '@uppy/core/dist/style.css';
  @import '@uppy/dashboard/dist/style.css';
</style>

<SubHeading>
  <h1>{order.address.street}</h1>
</SubHeading>

<div class="h-full">
  <Dashboard
    uppy={uppy}
    props={{
      height: 350,
      proudlyDisplayPoweredByUppy: false
    }}
  />
</div>

