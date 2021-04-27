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
  data: any,
}

/**
 *
 * @param intOrExt
 * @param order
 * @param category
 */
export default async function clearImage(intOrExt: 'interior'|'exterior', order: any, category: string): Promise<fetchResult> {
  try {
    const response = await fetch(`https://www.assetval.club/api/snapshotClearImage/${order._id}/${intOrExt}/${category}`, {
      method: 'POST',
      redirect: 'follow'
    });

    return await response.json();
  } catch (err) { console.error(err); }
}
