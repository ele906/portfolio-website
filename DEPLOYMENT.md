# Deployment Guide

This guide will help you deploy your portfolio website to production.

## Frontend Deployment (GitHub Pages)

### Step 1: Prepare Repository

1. Create a new GitHub repository named `portfolio-website` (or your preferred name)

2. Initialize git in your project:
```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit: Full-stack portfolio website"
```

3. Add remote and push:
```bash
git remote add origin https://github.com/ele906/portfolio-website.git
git branch -M main
git push -u origin main
```

### Step 2: Configure Vite for GitHub Pages

In `frontend/vite.config.js`, update the base URL:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/', // Use your repo name here
  server: {
    port: 3000,
  },
})
```

### Step 3: Deploy Frontend

```bash
cd frontend
npm install
npm run build
npm run deploy
```

Your frontend will be available at: `https://ele906.github.io/portfolio-website/`

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click Settings → Pages
3. Under "Source", select `gh-pages` branch
4. Click Save

## Backend Deployment

### Option 1: Railway (Recommended - Free Tier)

1. Sign up at [railway.app](https://railway.app)

2. Click "New Project" → "Deploy from GitHub repo"

3. Select your repository and the `backend` folder

4. Add environment variables:
   - `PORT=5000`
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://ele906.github.io`

5. Railway will automatically deploy! You'll get a URL like:
   `https://your-app.up.railway.app`

6. Update frontend to use production API:

Create `frontend/.env.production`:
```
VITE_API_URL=https://your-app.up.railway.app/api
```

### Option 2: Render (Free Tier)

1. Sign up at [render.com](https://render.com)

2. Click "New +" → "Web Service"

3. Connect your GitHub repository

4. Configure:
   - Name: `portfolio-api`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

5. Add environment variables (same as Railway)

6. Click "Create Web Service"

### Option 3: Vercel (For Both Frontend & Backend)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy backend:
```bash
cd backend
vercel
```

3. Deploy frontend:
```bash
cd frontend
vercel
```

## Environment Variables

### Frontend (.env.production)
```bash
VITE_API_URL=https://your-backend-url.com/api
```

### Backend (.env)
```bash
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://ele906.github.io
```

## Post-Deployment Checklist

- [ ] Frontend loads correctly at GitHub Pages URL
- [ ] Backend API responds at `/api/health`
- [ ] Frontend can fetch data from backend API
- [ ] Contact form works and submits to backend
- [ ] All images and assets load correctly
- [ ] Site is mobile responsive
- [ ] No console errors in browser
- [ ] CORS is configured correctly
- [ ] SSL/HTTPS works on both frontend and backend

## Updating Your Site

### Update Frontend
```bash
cd frontend
# Make your changes
npm run build
npm run deploy
```

### Update Backend
Just push to GitHub - Railway/Render will auto-deploy:
```bash
git add .
git commit -m "Update backend"
git push
```

## Custom Domain (Optional)

### For GitHub Pages:

1. Add `CNAME` file in `frontend/public/`:
```
yourdomain.com
```

2. Configure DNS with your domain provider:
```
Type: CNAME
Host: @
Value: ele906.github.io
```

### For Backend:

Configure custom domain in Railway/Render dashboard and update DNS accordingly.

## Troubleshooting

### Frontend not loading
- Check that `base` in `vite.config.js` matches your repo name
- Verify GitHub Pages is enabled in repo settings
- Check browser console for errors

### API calls failing
- Verify CORS is enabled on backend
- Check that `VITE_API_URL` points to correct backend URL
- Ensure backend is deployed and running
- Check network tab in browser dev tools

### Contact form not working
- Verify backend `/api/contact` endpoint is accessible
- Check form validation and error messages
- Look at backend logs for errors

## Monitoring

### Backend Logs
- Railway: View in dashboard
- Render: View in dashboard
- Vercel: `vercel logs`

### Frontend Analytics
Consider adding Google Analytics to track visitors:

```html
<!-- Add to frontend/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```

## Cost

Both frontend and backend can be deployed for **FREE**:
- GitHub Pages: Free for public repos
- Railway: Free tier (500 hours/month)
- Render: Free tier
- Vercel: Free for personal projects

---

Need help? Check the README.md or open an issue on GitHub!
