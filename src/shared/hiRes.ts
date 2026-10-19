/**
 * Asks image hosts for a sharp version of a photo. Google (lh3) links with no size suffix come back
 * at ~512px, and Amazon links often carry a thumbnail size like `._AC_SX300_`; both look pixelated
 * once stretched across a card or hero. Other links pass through unchanged.
 */
export function hiRes(url: string, width = 1600): string {
  if (!url) return url;
  if (/^https:\/\/lh3\.googleusercontent\.com\//.test(url)) {
    const base = url.replace(/=[^/]*$/, '');
    return `${base}=w${width}`;
  }
  if (/^https:\/\/(m\.media-amazon\.com|images-[a-z]+\.ssl-images-amazon\.com)\/images\//.test(url)) {
    return url.replace(/\._[^/]*?_\.(jpe?g|png|webp|gif)$/i, '.$1');
  }
  return url;
}
