# Deployment Guide

## 🚀 Free Hosting Options

### 1. Vercel (Recommended - Easiest)

**Steps:**
1. Create account at [vercel.com](https://vercel.com)
2. Push your code to GitHub
3. Connect GitHub repo to Vercel
4. Deploy automatically!

**Custom Domain:**
- Free yourname.vercel.app subdomain
- Add custom domain for free (yourname.com)

---

### 2. Netlify

**Steps:**
1. Run `npm run build` 
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
4. Or connect GitHub repo

**Custom Domain:**
- Free yourname.netlify.app subdomain
- Add custom domain for free

---

### 3. GitHub Pages

**Steps:**
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Access at yourname.github.io/repository-name

---

### 4. Surge.sh (Command Line)

**Steps:**
1. Install: `npm install -g surge`
2. Build: `npm run build`
3. Deploy: `surge dist`
4. Follow prompts

---

## 💡 Pro Tips

1. **Custom Domain**: Buy from Namecheap (~$10/year) and connect to any host
2. **SSL Certificate**: All platforms provide free HTTPS
3. **Automatic Updates**: Connect GitHub for auto-deploy on code changes
4. **Analytics**: Add Google Analytics for visitor tracking

## 🔧 Before Deploying

1. ✅ Test locally with `npm run dev`
2. ✅ Build successfully with `npm run build`
3. ✅ Update all placeholder content
4. ✅ Add your actual contact information
5. ✅ Test contact form (works with Netlify automatically)

## 📱 Performance

Your site will be:
- ⚡ **Super Fast** (Vite optimized)
- 📱 **Mobile Friendly** (Responsive design)
- 🔍 **SEO Ready** (Proper meta tags)
- 🌐 **Global CDN** (Fast worldwide)
