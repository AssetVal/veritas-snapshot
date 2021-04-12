import postToVeritas from './postToVeritas';

export default async function saveSettings(vendorID: string, changes: Object){
  try {
    return postToVeritas('snapshotPreferences', {vendorID, ...changes})
  } catch (err) { console.error(err); }
}
