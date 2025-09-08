# Feminas Family Makeover Studio Website

A modern, responsive website for Feminas Family Makeover Studio built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Beautiful, professional design with elegant pink and gold color scheme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Built with Next.js for fast loading times
- **Touch-Friendly**: Mobile-first design with touch-optimized interactions
- **SEO Ready**: Optimized for search engines with proper meta tags
- **Accessibility**: Built with accessibility best practices

## 📱 Sections Included

### 🏠 Hero Section
- Stunning introduction with call-to-action buttons
- Trust indicators and service previews
- Animated scroll indicator

### 💄 Services & Pricing
- Comprehensive service catalog with transparent pricing
- Popular packages highlighted
- Special offers and group discounts
- Mobile-friendly service cards

### 🖼️ Gallery/Portfolio
- Before/after showcase with hover effects
- Category filtering (Bridal, Hair, Makeup, Family)
- Interactive portfolio grid
- Placeholder for actual Instagram/Facebook images

### 👥 Team Section
- Professional team member profiles
- Skills and specialties display
- Experience highlights and achievements
- Social media integration ready

### ⭐ Testimonials
- Client reviews carousel
- Star ratings and verification badges
- Social proof statistics
- Reviews from Instagram/Facebook integration ready

### 📞 Contact Section
- Complete contact information
- Online booking form with service selection
- Business hours and location details
- WhatsApp integration
- Map placeholder (ready for Google Maps)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd feminas-family-makeover-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the website

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Customization Guide

### 1. Update Branding and Colors

**Logo**: Replace the placeholder logo in the header with your actual logo from social media.

**Colors**: The website uses a beautiful pink and gold theme. To match your exact brand colors:
- Edit `src/app/globals.css`
- Update the CSS variables in the `:root` section
- Replace `--primary-*` and `--gold-*` values with your brand colors

### 2. Replace Content with Your Information

**Contact Information** (`src/components/sections/ContactSection.tsx`):
- Update address, phone number, email
- Add your actual WhatsApp number
- Update business hours

**Team Information** (`src/components/sections/TeamSection.tsx`):
- Replace with actual team member photos and bios
- Update names, roles, and specialties
- Add real social media links

**Services and Pricing** (`src/components/sections/ServicesSection.tsx`):
- Update services and pricing to match your offerings
- Modify package details and descriptions

### 3. Add Real Images

**Gallery Section** (`src/components/sections/GallerySection.tsx`):
- Replace placeholder images with actual before/after photos from Instagram/Facebook
- Update portfolio items with real client transformations
- Ensure you have permission to use client photos

**Team Photos**:
- Add professional photos of your team members
- Optimize images for web (WebP format recommended)

### 4. Social Media Integration

**Instagram and Facebook**:
- Update all social media links throughout the site
- Consider adding Instagram feed widget
- Update testimonials with real reviews from your pages

### 5. SEO Optimization

**Meta Tags** (`src/app/layout.tsx`):
- Update title and description
- Add your actual business keywords
- Add Open Graph images

## 📱 Mobile Optimization

The website is built mobile-first with:
- Touch-friendly buttons and navigation
- Optimized image loading
- Responsive typography and layouts
- Fast loading times on mobile networks

## 🌐 Deployment Options (Low Budget)

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically
4. **Cost**: Free for small sites

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload `out` folder to Netlify
3. Configure custom domain
4. **Cost**: Free tier available

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://username.github.io/repo-name"`
3. Deploy: `npm run deploy`
4. **Cost**: Free

## 📋 Customization Checklist

### Essential Updates (Before Launch):
- [ ] Replace logo with actual studio logo
- [ ] Update all contact information (phone, email, address)
- [ ] Add real team member photos and bios
- [ ] Update services and pricing
- [ ] Replace gallery images with actual work
- [ ] Add real client testimonials
- [ ] Configure Google Maps with actual location
- [ ] Update social media links
- [ ] Test contact form functionality
- [ ] Optimize images for web

### Optional Enhancements:
- [ ] Add online booking system integration
- [ ] Integrate with Instagram API for live feed
- [ ] Add blog section for beauty tips
- [ ] Implement client review system
- [ ] Add online payment integration
- [ ] Set up Google Analytics
- [ ] Add chat widget for customer support

## 🛠️ Technical Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Deployment**: Vercel/Netlify ready

## 📞 Support

This website template includes:
- Clean, well-commented code
- Responsive design
- SEO optimization
- Performance optimization
- Accessibility features

## 📄 License

This project is created for Feminas Family Makeover Studio. All code is provided as-is for your use and customization.

---

**Ready to launch your beautiful new website!** 🚀

Remember to:
1. Replace all placeholder content with your actual information
2. Test the contact form thoroughly
3. Optimize all images before deployment
4. Update social media links
5. Set up analytics and monitoring

Your clients will love the professional, modern design that showcases your beautiful work!
