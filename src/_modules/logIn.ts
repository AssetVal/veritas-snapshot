import type Vendor from '../../classes/Vendor';
import postToVeritas, {fetchResult} from './postToVeritas';

/**
 * | Prop | Value |
 * |----|----|
 * | status | 'success' or 'failure' or 'error' |
 * |----|----|
 * | message | Description of result |
 * |----|----|
 * | data | {@link Vendor} |
 */
export interface logInResult extends fetchResult {data?: Vendor}

export default async function logInToVeritas(email: string, password: string): Promise<logInResult> {
  try {
    return postToVeritas('snapshotLogIn', {email, password})
  } catch (err) { console.error(err); }
}
