/**
 * Canonical home hero: JPEG under `/public/images/photography/hub-delivery/`.
 * Not the raw TIFF in `Assets for Hub/Stanly Ranch Hero Image/` — export or copy the
 * web-ready JPEG to this path, commit, then bump PUBLIC_ASSET_REV so hosts/browsers
 * fetch the new bytes (Vercel and social crawlers cache aggressively).
 */
export const PUBLIC_ASSET_REV = "4";

const HERO_HUB_JPEG = "/images/photography/hub-delivery/stanly-ranch-hero-web.jpg";

/** Use for <img src>, <link href=preload>, and partner cards that reuse this photo. */
export function hubDeliveryHeroSrc(): string {
  return `${HERO_HUB_JPEG}?rev=${PUBLIC_ASSET_REV}`;
}
