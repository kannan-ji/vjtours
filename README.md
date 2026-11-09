# VJ Tours and Travels — Kerala Cabs & Tour Operator

Modern catalogue website for **VJ Tours and Travels**, a Kerala cab and tour operator based in Perumbavoor, 15 minutes from Cochin International Airport (COK).

---

## Deploying to GitHub Pages

This project is fully configured for zero-config automatic deployment to **GitHub Pages** using Next.js static export (`output: 'export'`) and GitHub Actions.

### Step 1: Push code to a GitHub repository

If you haven't initialized git yet:

```bash
git init
git add .
git commit -m "Initial commit of VJ Tours and Travels website"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

---

### Step 2: Enable GitHub Pages in your repository settings

1. Go to your repository on GitHub (`https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>`).
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment** → **Source**, select **GitHub Actions**.
   *(Do NOT select "Deploy from a branch").*

---

### Step 3: Automated Build & Deployment

As soon as you push to `main` (or trigger it from the **Actions** tab via `workflow_dispatch`), the workflow `.github/workflows/deploy.yml` will:
1. Check out the repository.
2. Install dependencies.
3. Automatically configure the base path for your repository (`https://<username>.github.io/<repo-name>/`).
4. Build the static export to `./out`.
5. Deploy it live to GitHub Pages.

---

### Custom Domain (Optional)

If you configure a custom domain (e.g. `vjtours.com`) in **Settings → Pages → Custom domain**:
- The workflow will automatically serve from the root path without repository prefix.
- Alternatively, set the environment variable `NEXT_PUBLIC_BASE_PATH=""` in GitHub repository Secrets / Variables if needed.

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build static production export
npm run build
# Static export is placed in ./out
```
