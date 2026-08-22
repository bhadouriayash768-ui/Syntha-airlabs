# Direct Vercel Investigation

The live project `syntash-airlabs` has a deployment marked **Ready** and assigned to the production domain `syntash-airlabs.vercel.app`. Both the production alias and the unique deployment URL return Vercel’s own `404: NOT_FOUND` response.

The deployment record shows the source as **“Add files via upload”** and reports a deployment duration of roughly two seconds. The project has no connected Git repository. This is consistent with an upload-only deployment that did not run the Vite build or expose a built `index.html` at its root. The project logs show no application-function activity.

## Recovery implication

The reliable remedy is to deploy from a Git repository containing the **extracted project files at repository root**. Vercel will then run `pnpm run build:vercel` and serve the generated `vercel-dist/index.html`. Uploading the ZIP itself through the Vercel “Add files via upload” workflow does not constitute a project build/deploy workflow for this Vite source package.
