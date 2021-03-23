import type Vendor from '../../classes/Vendor';

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
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    const response = await fetch('https://www.assetval.club/api/snapshotLogIn', {
      method: 'POST',
      headers: headers,
      body: urlencoded,
      redirect: 'follow'
    });

    return await response.json();
  } catch (err) { console.error(err); }
}
