# GitHub Authentication Fix

## Problem
Permission denied: authenticated as `Ronitjaiswal30` but trying to push to `Ronitjaiswal1/3d_synthetic_dataset`

## Solution 1: Use Personal Access Token (PAT)

### Step 1: Create a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. Set these options:
   - **Note**: "3d_synthetic_dataset deployment"
   - **Expiration**: 90 days (or custom)
   - **Scopes**: Check `repo` (full control of private repositories)
4. Click **Generate token**
5. **Copy the token immediately** (you won't see it again!)

### Step 2: Update Remote URL with Token

```bash
cd parametric3d-site

# Remove current remote
git remote remove origin

# Add remote with your token (replace YOUR_TOKEN_HERE with actual token)
git remote add origin https://YOUR_TOKEN_HERE@github.com/Ronitjaiswal1/3d_synthetic_dataset.git

# Push
git push -u origin main
```

### Step 3: Verify
```bash
git remote -v
```

## Solution 2: Use SSH (Alternative)

### Step 1: Generate SSH Key (if you don't have one)

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
2. Go to: https://github.com/settings/keys
3. Click **New SSH key**
4. Paste your public key

### Step 3: Update Remote to SSH

```bash
cd parametric3d-site
git remote set-url origin git@github.com:Ronitjaiswal1/3d_synthetic_dataset.git
git push -u origin main
```

## Quick Command (Use Your Token)

```bash
cd parametric3d-site
git remote remove origin
git remote add origin https://YOUR_GITHUB_TOKEN@github.com/Ronitjaiswal1/3d_synthetic_dataset.git
git push -u origin main
```

Replace `YOUR_GITHUB_TOKEN` with the actual token from GitHub.
