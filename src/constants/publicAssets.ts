/**
 * Homepage hero JPEG in `public/images/photography/hub-delivery/`.
 *
 * Filename is **versioned** (not stable `*-web.jpg`) so Vercel’s edge cache cannot
 * keep serving an old JPEG after replacements — same URL was returning stale pixels.
 *
 * Regenerate from the Stanly TIFF (`Assets for Hub/Stanly Ranch Hero Image/*.tif`):
 *   ./scripts/sync-hub-hero-from-stanly-tif.sh
 *
 * After a new hero: give the JPEG a **new filename** below, bump PUBLIC_ASSET_REV,
 * delete the obsolete JPEG from `/public`, commit, push.
 */
export const PUBLIC_ASSET_REV = "6";

/** Matches the file checked into `public` (prefer a distinct name each art update). */
const HERO_HUB_JPEG =
  "/images/photography/hub-delivery/hub-hero-shot18-stanly-ranch.jpg";

/** Use for <img src>, <link href=preload>, and partner cards that reuse this photo. */
export function hubDeliveryHeroSrc(): string {
  return `${HERO_HUB_JPEG}?rev=${PUBLIC_ASSET_REV}`;
}
