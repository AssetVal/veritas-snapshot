<script>
  import { user } from '../../stores/user';
  import { goto, url } from '@roxi/routify';

  let username, password;

  async function login(){
    const response = await fetch('')
  }
</script>

<style>
  .mw-420 {
    min-width: 420px;
  }
</style>

<form class="pt-12 px-8 pb-4 rounded bg-white shadow w-100 relative mw-420">
  <div class="m-4">
    <div class="relative">
      <input id="email" type="text" class="pt-5 px-3 pb-1 text-sm focus:none" autocomplete="email" required autofocus>
      <label for="email">Email</label>
    </div>
  </div>
</form>
