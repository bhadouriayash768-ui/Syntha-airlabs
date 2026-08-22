# Hero Correction Checklist

- [x] Replace the abstract architectural hero asset with an original full-body celestial guardian in ivory drapery, pale-gold crown, and outstretched white wings.
- [x] Recompose the desktop hero as a full-screen stage with the guardian centered/right, a large left-aligned headline, and overlapping frosted glass cards on the lower right.
- [x] Preserve the existing Ayash / Dev copy and make the pointer bloom, ripples, and parallax visibly interact with the guardian and cards.
- [x] Keep the mobile version readable while retaining a clear guardian focal point.
- [x] Review the new desktop and mobile hero, then save the corrected version.

## Guardian Asset Reliability

- [x] Identify the preview asset request that fails or is stale.
- [x] Switch the hero to a persistently hosted guardian image URL.
- [x] Confirm the guardian appears in a fresh desktop preview and save the fix.

## Bundled Guardian Fallback

- [x] Check the live request log for the external hero-image failure.
- [x] Convert the guardian image into a bundled fallback that does not rely on the external storage path.
- [x] Verify the bundled guardian in a fresh preview and save the final fix.

## Editorial Interaction Revision

- [x] Add an outlined, pointer-responsive TextPressure headline treatment in the portfolio narrative.
- [x] Add a restrained FallingText interaction in a non-critical decorative message area.
- [x] Remove the broken service-card image and replace it with an intentional line-art visual.
- [x] Check the desktop and mobile experience, then save the revised project.

## Gravity and Process Artwork Revision

- [x] Move the gravity words into the “seen and chosen” services narrative.
- [x] Enable tap activation and a smaller mobile physics area.
- [x] Replace the missing process visual with a self-contained implementation.
- [x] Verify the new desktop and mobile layouts, then save the revision.

## Vercel Package Preparation

- [x] Identify and replace each remaining Manus-specific visual asset path.
- [x] Add Vercel static-hosting configuration and deployment metadata.
- [x] Build and inspect the Vercel-targeted production output.
- [x] Create a downloadable deployment package and a clear Vercel guide.

## Vercel 404 Repair

- [x] Identify the static output or routing configuration responsible for the Vercel 404.
- [x] Update the Vercel configuration and deployment guide with the corrected settings.
- [x] Verify the static output contains a root `index.html` and package the repair.

## Flat Vercel Import Repair

- [x] Produce a ZIP whose top level is directly the Vercel project root.
- [x] Add a minimal root-level deployment guide with the exact import settings.
- [ ] Verify the flattened ZIP contains `package.json`, `vercel.json`, and Vite source files at its top level.
