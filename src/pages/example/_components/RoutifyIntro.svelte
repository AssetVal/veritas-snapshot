<script>
  import { vendor } from '../../../../stores/vendor';
  import {goto} from '@roxi/routify';

  async function logout(){
    $vendor = false;

    /** We want to $goto our current location.
     *  Since we're now logged in, we shouldn't be redirected to this login page again. **/
    $goto(window.location.href);
  }
</script>

<button
  class="h-11 py-2 px-4 rounded border-blue-650 bg-blue-primary text-white mt-4 focus:outline-none"
  on:click={logout}
>
  Log Out {$vendor.user.name.first}
</button>
