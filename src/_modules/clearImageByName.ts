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
  data: Order,
}

/**
 *
 * @param intOrExt
 * @param order
 * @param category
 */
export default async function clearImageByName(intOrExt: 'interior'|'exterior', order: Order, name: string): Promise<fetchResult> {
  try {
    const response = await fetch(`https://www.assetval.club/api/snapshotClearImageByName/${order._id}/${intOrExt}/${name}`, {
      method: 'POST',
      redirect: 'follow'
    });

    return await response.json();
  } catch (err) { console.error(err); }
}
