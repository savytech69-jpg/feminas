# 💎 Feminas Family Makeover Studio - Design System

## 🎨 **Design Philosophy**
Luxury beauty studio with modern, elegant aesthetics featuring gradient gold/pink/orange accents on dark purple backgrounds.

---

## **Color Palette**

### Primary Colors
- **Background Dark**: `#0F0523` (Deep Purple)
- **Background Medium**: `#2A0E45` (Royal Purple)
- **Text Light**: `#F3E5F5` (Off-White)

### Accent Colors
- **Gold**: `#FFD700` - Primary accent
- **Orange**: `#FFA500` - Secondary accent
- **Deep Pink**: `#FF69B4` - Tertiary accent

### Gradients
```css
/* Hero/CTA Gradient */
linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF69B4 100%)

/* Background Overlay */
linear-gradient(135deg, rgba(42,14,69,0.6) 0%, rgba(25,10,45,0.8) 100%)
```

---

## **Typography**

### Fonts
- **Headings**: `Rajdhani` (700-800 weight)
- **Body**: `Inter` (300-400 weight)

### Font Sizes
- **Hero Headline**: `3.5rem` (mobile: `2rem`)
- **Section Titles**: `3.5rem` (mobile: `2.2rem`)
- **Card Titles**: `1.8rem`
- **Body Text**: `1.05-1.1rem`

### Text Effects
```css
/* Gradient Text */
background: linear-gradient(135deg, #FFD700 0%, #FFA500 30%, #FF69B4 60%, #FFD700 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## **Component Styles**

### Cards
```css
background: linear-gradient(145deg, rgba(42,14,69,0.6) 0%, rgba(25,10,45,0.8) 100%);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,215,0,0.2);
border-radius: 24px;
padding: 40px;
```

### Buttons

**Primary Button**
```css
background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
color: #0F0523;
padding: 18px 42px;
border-radius: 50px;
font-weight: 700;
box-shadow: 0 10px 40px rgba(255,215,0,0.4);
```

**Secondary Button (Outline)**
```css
background: transparent;
border: 2px solid rgba(255,215,0,0.4);
color: #FFD700;
padding: 18px 36px;
border-radius: 50px;
```

### Service Tiles
```css
min-height: 450px;
border-radius: 24px;
overflow: hidden;
transition: all 0.4s ease;

/* Hover Effect */
transform: translateY(-8px);
box-shadow: 0 20px 60px rgba(255,215,0,0.3);
```

### Badges
```css
padding: 8px 20px;
background: linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,105,180,0.15) 100%);
border: 1px solid rgba(255,215,0,0.3);
border-radius: 50px;
font-size: 0.85rem;
```

---

## **Animations**

### Shimmer Effect
```css
@keyframes shine-gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
}
animation: shine-gradient 3s linear infinite;
```

### Floating Elements
```css
@keyframes float-drift {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.2; }
    25% { transform: translate(20px, -30px) rotate(90deg) scale(1.2); opacity: 0.5; }
    50% { transform: translate(-15px, -50px) rotate(180deg) scale(0.8); opacity: 0.3; }
    75% { transform: translate(30px, -20px) rotate(270deg) scale(1.1); opacity: 0.4; }
}
```

### Glow Pulse
```css
@keyframes pulse-rich {
    0%, 100% { box-shadow: 0 0 30px rgba(255,215,0,0.6); }
    50% { box-shadow: 0 0 50px rgba(255,215,0,0.9); }
}
```

---

## **Layout Patterns**

### Grid Systems
```css
/* 3-Column Services */
grid-template-columns: repeat(3, 1fr);
gap: 40px;

/* Mobile: 1 Column */
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
}
```

### Container Widths
- **Wide**: `max-width: 1400px`
- **Standard**: `max-width: 1200px`
- **Narrow**: `max-width: 900px`

---

## **Responsive Breakpoints**

```css
/* Tablet & Mobile */
@media (max-width: 768px) { ... }

/* Small Mobile */
@media (max-width: 480px) { ... }
```

### Mobile Optimizations
- Reduce padding: `80px → 60px`
- Single column layouts
- Smaller fonts: `-30-40%`
- Hide decorative elements
- Stack buttons vertically

---

## **Shadow & Effects**

### Drop Shadows
```css
/* Subtle */
box-shadow: 0 10px 40px rgba(255,215,0,0.2);

/* Medium */
box-shadow: 0 20px 60px rgba(255,215,0,0.4);

/* Strong */
box-shadow: 0 0 50px rgba(255,215,0,0.9);
```

### Text Shadows
```css
text-shadow: 0 0 20px rgba(255,215,0,0.4);
filter: drop-shadow(0 4px 12px rgba(255,215,0,0.5));
```

### Backdrop Blur
```css
backdrop-filter: blur(10px);
background: rgba(42,14,69,0.6);
```

---

## **Icons & Symbols**
- **Sparkle**: ✨
- **Diamond**: 💎
- **Star**: ⭐
- **Glow**: 💫

---

## **Implementation Guidelines**

1. **Maintain Consistency**: Use predefined gradients and colors
2. **Responsive First**: Always include mobile styles
3. **Smooth Transitions**: `transition: all 0.4s ease`
4. **Accessible Contrast**: Ensure text readability
5. **Performance**: Optimize animations for 60fps

---

## **File Structure**
```
feminas/
├── css/
│   └── styles.css
├── js/
│   └── include.js
├── images/
│   ├── femlogo.png
│   └── [service-images].jpg
├── includes/
│   ├── header.html
│   └── footer.html
└── [page].html
```

---

**Last Updated**: December 2025  
**Version**: 2.0 - Modern Luxury Design
