<script lang="ts">
  import { vendor } from '../../../stores/vendor';
  import SubHeading from '../../../components/layout/SubHeading.svelte';

  interface iPush { value: boolean, text: 'Yes'|'No' }

  const mapOptions: Array<'Google Maps'|'Waze'> = ['Google Maps', 'Waze'];
  const pushOptions:Array<iPush> = [{value: false, text: 'No'}, {value: true, text: 'Yes'}];
</script>

<SubHeading> Settings </SubHeading>

<div class="pb-2">
  <label for="preferredMapApp">What is your preferred Map App</label>
  <select bind:value={$vendor.preferredMapApp} id="preferredMapApp" class="select">
    {#each mapOptions as mapOption}
      <option value="{mapOption}">{mapOption}</option>
    {/each}
  </select>
</div>

<div class="pb-2">
  <label for="allowPushNotifications">Allow Push Notifications</label>
  <select bind:value={$vendor.allowPushNotifications} id="allowPushNotifications" class="select">
    {#each pushOptions as option}
      <option value={option.value}>{option.text}</option>
    {/each}
  </select>
</div>
