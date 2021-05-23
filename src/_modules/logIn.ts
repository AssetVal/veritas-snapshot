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
export interface logInResult {
  status: 'success' | 'failure' | 'error'
  message: string,
  data?: Vendor
}

export default async function logInToVeritas(email: string, password: string): Promise<logInResult> {
  try {
    const body = {email, password};

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();

    Object.keys(body).forEach((key: string) => {
      urlencoded.append(key, body[key])
    })

    const response = await fetch('https://www.assetval.club/api/snapshotLogIn', {
      method: 'POST',
      headers: headers,
      body: urlencoded,
      redirect: 'follow'
    });

    return await response.json();
  } catch (err) { console.error(err); }
}
