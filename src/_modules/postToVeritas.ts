/**
 * | Prop | Value |
 * |----|----|
 * | status | 'success' or 'failure' or 'error' |
 * |----|----|
 * | message | Description of result |
 */
export interface fetchResult {
  status: 'success' | 'failure' | 'error'
  message: string,
  data?: any,
}

/**
 *
 * @param route - Creates the URL ```https://www.assetval.club/api/${route}```
 * @param body - Object to be passed to Veritas
 */
export default async function postToVeritas(route: string, body: Object): Promise<fetchResult>{
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();

    Object.keys(body).forEach((key: string) => {
      urlencoded.append(key, body[key])
    })

    const response = await fetch(`https://www.assetval.club/api/${route}`, {
      method: 'POST',
      headers: headers,
      body: urlencoded,
      redirect: 'follow'
    });

    return await response.json();
  } catch (err) { console.error(err); }
}
