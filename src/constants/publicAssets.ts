/**
 * Homepage hero JPEG: `public/images/photography/hub-delivery/…`
 * Regenerate: `./scripts/sync-hub-hero-from-stanly-tif.sh`
 * After asset updates: rename the JPG (new URL = fresh CDN), update HERO_FILENAME, bump REV.
 *
 * IMPORTANT: Omit `?query` on URLs — avoids edge/CDN quirks; cache-bust with filename/rev bumps.
 */
export const PUBLIC_ASSET_REV = "8";

const HERO_FILENAME = "hub-hero-shot18-stanly-ranch.jpg" as const;
const HERO_DIR = "/images/photography/hub-delivery";

/** Path-only (no domain, no query) for `<img>`, `<Image>`, preload, OG. */
export function hubDeliveryHeroSrc(): string {
  return `${HERO_DIR}/${HERO_FILENAME}`;
}
