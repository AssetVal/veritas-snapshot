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
 */
export default async function clearPhotosFolder(intOrExt: 'interior' | 'exterior', order: any): Promise<fetchResult> {
  try {
    const response = await fetch(`https://www.assetval.club/api/snapshotClearImages/${order._id}/${intOrExt}`, {
      method: 'POST',
      redirect: 'follow'
    });

    return await response.json();
  } catch (err) { console.error(err); }
}
