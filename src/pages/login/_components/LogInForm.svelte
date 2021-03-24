<script>
  import { vendor } from '../../../../stores/vendor';
  import { goto } from '@roxi/routify';
  import logInToVeritas from '../../../_modules/logIn';

  // Variables
  let email, password;

  // Functions
  function login(){
    logInToVeritas(email, password).then(response => {
      if (response.status === 'success'){
        $vendor = {...response.data};
        console.log($vendor);

        /** We want to $goto our current location.
         *  Since we're now logged in, we shouldn't be redirected to this login page again. **/
        $goto(window.location.href);
      } else {
        console.log('Nope')
      }
    })
  }
</script>

<style>
  .mw-420 { min-width: 420px; }

  label {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding: calc(.75rem / 3) .75rem;
    width: 100%;
    margin-bottom: 0;
    line-height: 1.5;
    text-align: left;
    font-size: .75rem;
    color: #888c9b;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
    pointer-events: none;
  }
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
      type="button"
    > Sign In </button>
  </div>

  <div class="text-center pt-4">
    <a
      href="https://www.assetval.club/forgot-pass"
      class="text-blue-primary underline hover:text-blue-750"
    > Forgot Password? </a>
  </div>

</form>
