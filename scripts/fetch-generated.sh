#!/usr/bin/env bash
# Localize the Higgsfield-generated assets referenced in
# src/data/generated-registry.ts (remote CDN URLs → local files).
#
# Run this on a machine with open network access:
#   bash scripts/fetch-generated.sh
#
# Then, in src/data/generated-registry.ts, replace each remote `path`
# with the corresponding local path below, commit the binaries, deploy.
# (Local files remove the dependency on Higgsfield CDN URL longevity.)

set -euo pipefail
cd "$(dirname "$0")/.."

CDN="https://d8j0ntlcm91z4.cloudfront.net/user_3CMRVYJQZdncYM0yA1qLrI0bRyR"
OUT="public/images/generated"

mkdir -p "$OUT/hero" "$OUT/gammes" "$OUT/ambiance"

fetch() {
  local url="$1" dest="$2"
  if [ -f "$dest" ]; then
    echo "= $dest (exists, skip)"
  else
    echo "↓ $dest"
    curl -fSL --retry 3 -o "$dest" "$url"
  fi
}

# ——— Ready assets (generated 2026-07-22) ———
fetch "$CDN/hf_20260722_133713_37f2877c-538e-4892-908e-d8db7f78ef32.png" "$OUT/hero/master.png"
fetch "$CDN/hf_20260722_133708_69c6bc53-76b5-41e4-bef6-9498a1b9e4f1.mp4" "$OUT/hero/master.mp4"
fetch "$CDN/hf_20260722_133752_05a1441a-d332-4718-a1b0-48257c7894a9.png" "$OUT/gammes/aura-hero.png"
fetch "$CDN/hf_20260722_133758_e7109442-ab53-49f5-bb71-1ff4b6184808.png" "$OUT/gammes/forge-hero.png"
fetch "$CDN/hf_20260722_133805_5cdd9094-e061-4706-905f-76001cfc5395.png" "$OUT/gammes/secu-plus-hero.png"

echo
echo "Done. Optional: convert PNG → JPEG (mozjpeg/squoosh) to cut weight,"
echo "then update the paths in src/data/generated-registry.ts and commit."
