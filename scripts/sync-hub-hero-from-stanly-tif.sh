#!/usr/bin/env bash
# Rebuild the live hub hero JPEG from the client Stanly TIFF in Assets for Hub.
# The homepage loads hub-delivery/stanly-ranch-hero-web.jpg only — not the TIFF.
# After export: bump PUBLIC_ASSET_REV in src/constants/publicAssets.ts, commit, push.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STANLY_DIR="$ROOT/public/images/Assets for Hub/Stanly Ranch Hero Image"
SRC="${1:-$(find "$STANLY_DIR" -maxdepth 1 -iname '*.tif' ! -iname '.*' | head -1)}"
OUT="$ROOT/public/images/photography/hub-delivery/stanly-ranch-hero-web.jpg"
if [[ -z "${SRC:-}" ]] || [[ ! -f "$SRC" ]]; then
  echo "No TIFF found under: $STANLY_DIR" >&2
  echo "Place the master (.tif) there or pass: $0 path/to/image.tif" >&2
  exit 1
fi
if ! command -v magick &>/dev/null; then
  echo "Install ImageMagick (magick) to export JPEG from TIFF." >&2
  exit 1
fi
echo "Source: $SRC"
mkdir -p "$(dirname "$OUT")"
magick "$SRC" -resize '2560x>' -strip -quality 84 -sampling-factor 4:2:0 "$OUT"
echo "Wrote: $OUT"
ls -la "$OUT"
