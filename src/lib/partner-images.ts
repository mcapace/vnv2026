/** Client partner pack served from `public/images/partners/` (no trailing-space path issues). */
export function partnerImage(relativePath: string): string {
  return encodeURI(`/images/partners/${relativePath}`);
}
