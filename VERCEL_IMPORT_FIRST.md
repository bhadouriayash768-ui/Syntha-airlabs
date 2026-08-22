# Deploy this Flat Package to Vercel

> **Use this package instead of the earlier ZIP.** Its top level is the Syntha Airlabs Vercel project root: `package.json`, `vercel.json`, `vite.config.ts`, and `client/` are immediately visible after extraction.

## Exact steps

1. Create a **new empty GitHub repository**. Do not place the files inside another folder.
2. Extract `syntha-airlabs-vercel-root.zip` and upload **its contents** to the repository root. On GitHub, you should see `package.json` at the top level.
3. In Vercel, choose **Add New → Project** and import that repository.
4. On the import screen, leave **Root Directory** empty. Do not enter `aurelis-vpn-landing`.
5. If the fields are shown, enter the following values:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm run build:vercel` |
| Output Directory | `vercel-dist` |

6. Click **Deploy**. The project creates `vercel-dist/index.html`, so Vercel has a root document to serve.

## If the old project still returns 404

Create a **new Vercel project** from the flat repository above rather than reusing the prior project. The earlier 404 can persist when its root directory is saved incorrectly in project settings.
