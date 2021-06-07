/**
 * Building links that fit the examples shown in
 * {@link https://developers.google.com/maps/documentation/urls/get-started#directions-examples}
 * @param url
 */
export default function encodeGoogleURL(url: string): string {
  let newURL: string;
  newURL = url.replace(' ', '+')

  if (newURL.includes(' ')) return encodeGoogleURL(newURL);
  return newURL;
}
