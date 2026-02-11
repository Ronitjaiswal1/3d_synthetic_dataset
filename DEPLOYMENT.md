# Deployment Guide

## GitHub Pages Setup & Deployment

Your website is now configured for automatic deployment to GitHub Pages at:
**https://ronitjaiswal1.github.io/3d_synthetic_dataset/**

### Step 1: Initialize Git Repository (if not already done)

```bash
cd parametric3d-site
git init
```

### Step 2: Add Remote Repository

```bash
git remote add origin https://github.com/Ronitjaiswal1/3d_synthetic_dataset.git
```

If the remote already exists, verify with:
```bash
git remote -v
```

### Step 3: Commit All Changes

```bash
git add .
git commit -m "Initial commit: Parametric3D dataset website"
```

### Step 4: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

If you encounter issues, you may need to force push (⚠️ use carefully):
```bash
git push -u origin main --force
```

### Step 5: Enable GitHub Pages

1. Go to: https://github.com/Ronitjaiswal1/3d_synthetic_dataset/settings/pages
2. Under **Source**, select **GitHub Actions**
3. The site will automatically deploy on the next push

### Step 6: Verify Deployment

1. Go to: https://github.com/Ronitjaiswal1/3d_synthetic_dataset/actions
2. Check the **Deploy to GitHub Pages** workflow
3. Once complete (green checkmark), visit: https://ronitjaiswal1.github.io/3d_synthetic_dataset/

## Future Updates

After making changes to the website:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site.

## Troubleshooting

### Build Fails on GitHub Actions

1. Check the Actions tab for error details
2. Ensure `package-lock.json` is committed
3. Verify all dependencies are in `package.json`

### Site Shows 404

1. Verify GitHub Pages is set to **GitHub Actions** (not branch)
2. Check the base path in `vite.config.ts` is `/3d_synthetic_dataset/`
3. Wait 2-3 minutes after deployment completes

### Changes Don't Appear

1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait 1-2 minutes for CDN to update
3. Check Actions tab to ensure deployment succeeded

## Configuration Files

- ✅ `vite.config.ts` - Base path set to `/3d_synthetic_dataset/`
- ✅ `.github/workflows/deploy.yml` - Automated deployment workflow
- ✅ GitHub links updated in Hero and Footer components
- ✅ README.md updated with deployment instructions

## What Was Configured

1. **Vite Configuration**: Set base path for GitHub Pages subdirectory hosting
2. **GitHub Actions Workflow**: Automated build and deployment on push to main
3. **Repository Links**: Updated all GitHub links to point to your repository
4. **Build Verification**: Production build tested and working
5. **Documentation**: Added comprehensive README and deployment guide
