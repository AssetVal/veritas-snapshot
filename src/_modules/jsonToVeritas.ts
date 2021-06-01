import type Order from '../../classes/Order';

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
  data?: Order,
}

/**
 *
 * @param route - Creates the URL ```https://www.assetval.club/api/${route}```
 * @param body - Object to be passed to Veritas
 */
export default async function jsonToVeritas(route: string, body: any): Promise<fetchResult>{
  try {
    const response = await fetch(`https://www.assetval.club/api/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    });

    if (response.ok){
      return await response.json();
    } else {
      console.error({"HTTP-Error ": response.status})
      throw await response.text();
    }
  } catch (err) { console.error(err); }
}
