#!/usr/bin/env bash
# Regenerate hero AVIF + WebP + JPG from a master (TIFF or JPEG).
# Usage: ./scripts/build-hero-assets.sh [path-to-source-image]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-$ROOT/public/images/photography/hero-stanly-ranch-convertible.jpg}"
OUT="$ROOT/public/images/photography"
if [[ ! -f "$SRC" ]]; then
  echo "Source not found: $SRC" >&2
  exit 1
fi
magick "$SRC" -resize '2560x>' -quality 55 -define heic:speed=4 "$OUT/hero-stanly-ranch-convertible.avif"
magick "$SRC" -resize '2560x>' -quality 82 -define webp:method=6 "$OUT/hero-stanly-ranch-convertible.webp"
magick "$SRC" -resize '2560x>' -quality 84 -sampling-factor 4:2:0 -strip "$OUT/hero-stanly-ranch-convertible.jpg"
echo "Wrote $OUT/hero-stanly-ranch-convertible.{avif,webp,jpg}"
