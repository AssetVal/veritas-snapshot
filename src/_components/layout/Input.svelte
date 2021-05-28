<script lang="ts">
  import {v4 as uuid} from 'uuid';
  export let id = uuid();
  export let value = '';
  export let label = '';
  export let set = 'interior';
</script>

<style>
  .label-animate {
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    height: calc(3.5rem + 2px);
    padding: 1rem .75rem;
    appearance: none;
  }

  .label-animate:focus, .label-animate:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: .625rem;
    color: #212529;
    background-color: #fff;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

  .label-animate:focus { outline: 0; }

  .label-animate:focus~label, .label-animate:not(:placeholder-shown)~label{
    opacity: .75;
    transform: scale(.85) translateY(-.5rem) translateX(.15rem);
  }

  .label {
    color: rgba(128, 127, 127, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem .75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .1s ease-in-out,transform .1s ease-in-out;
    display: inline-block;
  }
</style>

<div class="m-2 relative">
  <input
    required
    placeholder={label}
    id={id}
    type="text"
    class="focus:outline-none focus:black-plum label-animate placeholder-transparent focus:border-b-blue-secondary"
    value={value}
    data-set={set}
  >
  <label class="label" for={id}>{label}</label>
</div>
