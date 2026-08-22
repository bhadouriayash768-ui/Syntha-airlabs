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
- [x] Verify the flattened ZIP contains `package.json`, `vercel.json`, and Vite source files at its top level.

## Direct Vercel Deployment Diagnosis

- [x] Inspect the public Vercel response and available deployment information.
- [x] Identify whether the project lacks an active production deployment, has a domain-alias issue, or requires a Vercel setting correction.
- [x] Provide the smallest exact set of steps to restore the deployment URL.

## Syntha Airlabs Rebrand

- [x] Locate every visible Ayash / Dev reference and old portfolio-specific sentence.
- [x] Replace the interface, page title, metadata, and deployment guide branding with Syntha Airlabs.
- [x] Build, check the updated public site, and package the rebrand for the existing Vercel repository.

## Gmail Contact Update

- [x] Set the final contact button and visible address to synthaairlabs@gmail.com.
- [x] Verify the mailto action and save the update.

## Mobile Motion Update

- [x] Add a touch-driven hero response with a visible ambient motion cue.
- [x] Add scroll-triggered reveals for key content sections on mobile.
- [x] Ensure gravity text has a reliable tap-to-play action and replay affordance.
- [x] Check mobile motion and performance, then save the update.

## Cinematic Mobile Load Transition

- [x] Add a short Syntha Airlabs introduction overlay before the first hero view.
- [x] Hand off to the hero cleanly and skip the animation for reduced-motion users.
- [x] Review the mobile loading moment and production build, then save the update.

## Cinematic Load Sound

- [x] Add a lightweight synthesized chime that can only start after a visitor enables sound.
- [x] Add a clear sound control to the loading moment and preserve reduced-motion silence.
- [x] Verify the sound interaction and production build, then save the update.

## Main Branch Redeploy

- [ ] Confirm the active branch and configured Git remote.
- [ ] Commit the completed Syntha Airlabs changes to `main`.
- [ ] Push `main` to the connected remote and confirm the Vercel redeploy trigger.

## Latest Deployment ZIP

- [ ] Build the current Syntha Airlabs project for Vercel one final time.
- [ ] Create a flat ZIP with the latest source, configuration, and deployment guide.
- [ ] Verify the ZIP root and deliver the file.
