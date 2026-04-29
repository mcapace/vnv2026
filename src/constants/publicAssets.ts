/**
 * Homepage hero JPEG (the live file the browser loads):
 * `public/images/photography/hub-delivery/stanly-ranch-hero-web.jpg`
 *
 * That file is exported from your Stanly TIFF in:
 * `public/images/Assets for Hub/Stanly Ranch Hero Image/*.tif`
 * (TIFF is gitignored; hub JPEG must be regenerated and committed.)
 *
 * Run: `./scripts/sync-hub-hero-from-stanly-tif.sh`
 * Then bump PUBLIC_ASSET_REV so CDNs refresh.
 */
export const PUBLIC_ASSET_REV = "5";

const HERO_HUB_JPEG = "/images/photography/hub-delivery/stanly-ranch-hero-web.jpg";

/** Use for <img src>, <link href=preload>, and partner cards that reuse this photo. */
export function hubDeliveryHeroSrc(): string {
  return `${HERO_HUB_JPEG}?rev=${PUBLIC_ASSET_REV}`;
}
