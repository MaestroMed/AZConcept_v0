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

# ——— Ready assets (batch 1 · 2026-07-22) ———
fetch "$CDN/hf_20260722_133713_37f2877c-538e-4892-908e-d8db7f78ef32.png" "$OUT/hero/master.png"
fetch "$CDN/hf_20260722_133708_69c6bc53-76b5-41e4-bef6-9498a1b9e4f1.mp4" "$OUT/hero/master.mp4"
fetch "$CDN/hf_20260722_133752_05a1441a-d332-4718-a1b0-48257c7894a9.png" "$OUT/gammes/aura-hero.png"
fetch "$CDN/hf_20260722_133758_e7109442-ab53-49f5-bb71-1ff4b6184808.png" "$OUT/gammes/forge-hero.png"
fetch "$CDN/hf_20260722_133805_5cdd9094-e061-4706-905f-76001cfc5395.png" "$OUT/gammes/secu-plus-hero.png"

# ——— Ready assets (batch 2 · 2026-07-25) ———
fetch "$CDN/hf_20260725_004937_cbac8e0e-4c18-40fa-9509-b3531bb3176a.png" "$OUT/gammes/atelier-hero.png"
fetch "$CDN/hf_20260725_005122_5cde2c7f-7785-438f-ba57-b23ee13593b6.png" "$OUT/gammes/jansen-design-hero.png"
fetch "$CDN/hf_20260725_005235_22ad397d-185c-4773-9c27-8c2941938b97.png" "$OUT/gammes/firewall-hero.png"
fetch "$CDN/hf_20260725_011215_a9313e7f-e58e-470a-b197-c4ca661994be.png" "$OUT/gammes/technique-hero.png"
fetch "$CDN/hf_20260725_011231_72d4f14c-b0b6-4ded-9ba8-e43c05d9a9da.png" "$OUT/gammes/airflow-hero.png"

echo
echo "Done. Optional: convert PNG → JPEG (mozjpeg/squoosh) to cut weight,"
echo "then update the paths in src/data/generated-registry.ts and commit."
