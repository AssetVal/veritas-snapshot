<script lang="ts">
  import { vendor } from '../../../stores/vendor';
  import SubHeading from '../../../components/layout/SubHeading.svelte';

  const mapOptions: Array<'Google Maps'|'Waze'> = ['Google Maps', 'Waze']
</script>

<SubHeading> Settings </SubHeading>

<label for="preferredMapApp">What is your preferred Map App</label>
<select bind:value={$vendor.preferredMapApp} id="preferredMapApp">
  {#each mapOptions as mapOption}
    <option value={mapOption}>{mapOption}</option>
  {/each}
</select>

<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
<h1>Settings</h1>
