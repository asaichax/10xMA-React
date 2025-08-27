# Deployment Guide - 10XMA Creative Production & Media Agency

This guide covers various deployment options for the 10XMA website.

## 🚀 **Quick Deploy Options**

### 1. **Vercel (Recommended)**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Custom domains

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect to GitHub for automatic deployments
```

### 2. **Netlify**
- Drag and drop deployment
- Form handling
- Serverless functions

```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

### 3. **GitHub Pages**
- Free hosting
- Automatic deployments from main branch

```bash
# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

## 📦 **Build Process**

### Production Build
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Output
The build process creates a `dist/` folder containing:
- Optimized HTML, CSS, and JavaScript
- Minified assets
- Source maps (for debugging)

## 🌐 **Domain Configuration**

### Custom Domain Setup
1. **Purchase domain** from your preferred registrar
2. **Configure DNS** to point to your hosting provider
3. **Add domain** in your hosting platform settings
4. **Enable HTTPS** (automatic with most platforms)

### Environment Variables
Create a `.env` file for production:
```env
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=10XMAinc@gmail.com
```

## 🔧 **Performance Optimization**

### Pre-deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test all pages and forms
- [ ] Check responsive design on mobile
- [ ] Verify all links work
- [ ] Test contact form functionality
- [ ] Optimize images (if any)
- [ ] Check loading speed

### Performance Tips
- Images are already optimized (using placeholder URLs)
- CSS and JS are minified automatically
- Bootstrap CSS is efficiently loaded
- No heavy dependencies

## 📊 **Analytics Setup**

### Google Analytics 4
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Other Analytics Options
- **Plausible**: Privacy-focused analytics
- **Fathom**: Simple, privacy-friendly analytics
- **Simple Analytics**: GDPR compliant

## 🔒 **Security Considerations**

### HTTPS
- Enable HTTPS on your hosting platform
- Redirect HTTP to HTTPS
- Use secure headers

### Content Security Policy
Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">
```

## 📱 **Mobile Optimization**

### Testing
- Test on various devices and browsers
- Check touch interactions
- Verify responsive breakpoints
- Test loading speed on mobile networks

### PWA Features (Optional)
To make it a Progressive Web App:
1. Add a web manifest
2. Create service worker
3. Add app icons
4. Enable offline functionality

## 🔄 **Continuous Deployment**

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

## 🆘 **Troubleshooting**

### Common Issues
1. **Build fails**: Check for TypeScript errors
2. **Styling issues**: Verify Bootstrap CSS is loading
3. **Form not working**: Check form submission endpoint
4. **Slow loading**: Optimize images and check CDN

### Support
- Check browser console for errors
- Verify all dependencies are installed
- Test locally before deploying
- Check hosting platform logs

## 📞 **Contact**

For deployment support:
- **Email**: 10XMAinc@gmail.com
- **Documentation**: Check hosting platform docs
- **Issues**: Create GitHub issue for technical problems

---

**Happy Deploying! 🚀**
