<script lang="ts">
  import { params } from '@roxi/routify';
  import {vendor} from '../../../stores/vendor';
  import Order from '../../../classes/Order';

  let order: Order = $vendor.orders.inProgress.filter((order: Order) => order._id === $params._id)[0];
</script>


<div>
  <h1>{order.address.street}</h1>
</div>
