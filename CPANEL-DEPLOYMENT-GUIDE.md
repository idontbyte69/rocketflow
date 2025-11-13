# cPanel Deployment Guide for RocketFlow Client

## 📦 Package Created
**File:** `rocketflow-client-deployment.zip` (18MB)
**Location:** `/Users/idontbyte/Desktop/Coding Stuff/Digi5/rocketflow/`

## 🚀 Deployment Steps

### 1. Upload to cPanel
1. Log into your cPanel
2. Go to **File Manager**
3. Navigate to your desired directory (e.g., `public_html` or a subdomain folder)
4. Click **Upload** and upload `rocketflow-client-deployment.zip`
5. After upload, **Extract** the zip file
6. Delete the zip file after extraction

### 2. Set Up Node.js Application

#### Option A: Using cPanel Node.js Manager (Recommended)
1. In cPanel, go to **"Setup Node.js App"**
2. Click **"Create Application"**
3. Configure:
   - **Node.js version:** 18.x or higher
   - **Application mode:** Production
   - **Application root:** Path where you extracted the files (e.g., `public_html`)
   - **Application URL:** Your domain or subdomain
   - **Application startup file:** `server.js`
4. Click **"Create"**
5. The app will auto-install dependencies and start

#### Option B: Using SSH Terminal
If you have SSH access:

```bash
# Navigate to your app directory
cd public_html  # or your deployment directory

# The package.json is already configured with dependencies
# Node modules are already included in standalone build

# Start the server
node server.js
```

### 3. Environment Variables (if needed)
If your app needs environment variables:

1. In Node.js App Manager, click on your app
2. Add environment variables under **"Environment Variables"** section:
   - `NODE_ENV=production`
   - `PORT=3000` (or as assigned by cPanel)
   - Any API keys or backend URLs

### 4. Domain Configuration
1. Make sure your domain/subdomain points to the correct directory
2. If using cPanel's App Manager, it will handle the proxy automatically
3. Access your site at: `https://yourdomain.com`

## 📝 Package Contents

The deployment package includes:
- ✅ `server.js` - Standalone Next.js server
- ✅ `.next/` - Compiled Next.js application
- ✅ `public/` - Static assets
- ✅ `node_modules/` - Required dependencies (already bundled)
- ✅ `package.json` - Project configuration

## ⚙️ Configuration Details

Your Next.js app is configured with:
- **Output Mode:** Standalone (optimized for hosting)
- **Compression:** Enabled
- **Image Optimization:** Configured for production
- **Security Headers:** Enabled

## 🔧 Troubleshooting

### App won't start?
1. Check Node.js version (must be 18.x+)
2. Verify `server.js` exists in root directory
3. Check cPanel error logs

### Port conflicts?
- cPanel usually assigns ports automatically
- Check your Node.js App settings for the assigned port

### Missing environment variables?
- Add them through cPanel Node.js App Manager
- Or create `.env.production` file in root

### Images not loading?
- Ensure `public/` folder was extracted correctly
- Check file permissions (should be 644 for files, 755 for directories)

## 📞 Support

If you encounter issues:
1. Check cPanel error logs
2. Verify all files extracted properly
3. Ensure Node.js version compatibility
4. Contact your hosting provider for cPanel-specific configuration

---

**Note:** This is a production build. For development, use `npm run dev` locally.
