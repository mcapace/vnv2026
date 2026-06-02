/** Bump when valley/partner frames change — new filename = fresh CDN URL (no query strings). */
export const VALLEY_GALLERY_IMAGES_REV = "2";

/** Client partner pack served from `public/images/partners/` (no trailing-space path issues). */
export function partnerImage(relativePath: string): string {
  return encodeURI(`/images/partners/${relativePath}`);
}
