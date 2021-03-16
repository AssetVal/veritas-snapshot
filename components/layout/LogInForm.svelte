<script>
  import { user } from '../../stores/user';
  import { goto } from '@roxi/routify';

  let email, password;

  async function login(){
    const response = await fetch('https://www.assetval.club/snapshotLogIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email, password})
    });

    const result = await response.json();

    console.log(result);

    $user = { email, password };
    console.log($user);

    /** We want to $goto our current location.
     *  Since we're now logged in, we shouldn't be redirected to this login page again. **/
    $goto(window.location.href);
  }
</script>

<style>
  .mw-420 { min-width: 420px; }
</style>

<form class="pt-12 px-8 pb-4 rounded bg-white shadow relative mw-420">
  <div class="m-4 relative">
    <input
      required
      id="email"
      type="text"
      class="pt-5 px-3 pb-1 text-sm border-b-2 focus:outline-none focus:border-b-blue-primary focus:black-plum"
      autocomplete="email"
      bind:value={email}>
    <label for="email">Email</label>
  </div>

  <div class="m-4 relative">
    <input
      required
      id="password"
      type="password"
      class="pt-5 px-3 pb-1 text-sm border-b-2 focus:outline-none focus:border-b-blue-primary focus:black-plum"
      autocomplete="password"
      bind:value={password}>
    <label for="password">Password</label>
  </div>

  <div class="m-4 flex justify-center">
    <button
      class="h-11 py-2 px-4 rounded border-blue-650 bg-blue-primary text-white w-full"
      on:click={login}
    > Sign In </button>
  </div>

</form>
