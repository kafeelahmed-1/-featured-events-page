Netlify Deployment Notes

Quick steps to deploy this Next.js project on Netlify:

1. Install the official Netlify Next plugin locally (optional but recommended):
   - npm install --save-dev @netlify/plugin-nextjs

2. Build locally to verify: 
   - npm run build

3. In the Netlify dashboard:
   - Set "Build command" to: npm run build
   - Set "Publish directory" to: .next
   - Netlify will automatically detect and run the plugin declared in `netlify.toml`.

Notes:
- If you prefer a static export (no server behavior), you can use `next export` and set the publish directory to `out` (and modify build command to `next build && next export`).
- Make sure any environment variables needed by the app are added in the Netlify site settings.
- After deployment, check _Functions_ or Netlify logs if you use server-side features.