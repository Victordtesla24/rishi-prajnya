
# Vercel Deployment Instructions for RishiPrajnya

Your Next.js app is located in the `nextjs_space` subdirectory. Follow these steps to configure Vercel correctly:

## Option 1: Configure via Vercel Dashboard (Recommended)

### Step 1: Import Project
1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Import your GitHub repository: `Victordtesla24/rishi-prajnya`

### Step 2: Configure Build Settings
When prompted, configure these settings:

**Framework Preset:** `Next.js`

**Root Directory:** `nextjs_space` ← **THIS IS CRITICAL**

**Build Command:** `yarn build` (default)

**Output Directory:** `.next` (default)

**Install Command:** `yarn install` (default)

### Step 3: Environment Variables
Add the following environment variables:

- **Key:** `DATABASE_URL`
- **Value:** Your PostgreSQL connection string
- **Environments:** Production, Preview, Development

### Step 4: Deploy
Click **"Deploy"** and wait for the build to complete.

---

## Option 2: Using Vercel CLI

```bash
# Navigate to the nextjs_space directory
cd /path/to/rishi-prajnya/nextjs_space

# Login to Vercel
vercel login

# Deploy from within nextjs_space
vercel --prod
```

**Important:** When deploying via CLI, make sure you're running the command from inside the `nextjs_space` directory, not the repository root.

---

## Troubleshooting

### If you see 404 errors:
- Verify the **Root Directory** is set to `nextjs_space` in Vercel project settings
- Go to Vercel Dashboard → Your Project → Settings → General → Root Directory

### If build fails:
- Check that environment variables are correctly set
- Verify the build logs in Vercel dashboard
- Ensure `DATABASE_URL` is configured

### To update Root Directory after deployment:
1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **General**
4. Scroll to **Root Directory**
5. Enter: `nextjs_space`
6. Click **Save**
7. Redeploy the project

---

## Current Deployment Issue

The current deployment at https://rishi-prajnya-pjqpworm4-vics-projects-31447d42.vercel.app shows a 404 error because Vercel is looking at the repository root instead of the `nextjs_space` directory.

**To fix:** Update the Root Directory setting in your Vercel project to `nextjs_space`.
