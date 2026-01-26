# Quick Start Guide - Greyhawk Capital Website

## Overview
A professional bilingual (English/Turkish) corporate website for Greyhawk Capital, a strategic capital advisory and financial services firm.

## Features

✅ **Bilingual Support**: Full English and Turkish language support with language switcher
✅ **Responsive Design**: Mobile-first, fully responsive across all devices
✅ **Modern UI**: Clean, professional design with navy blue (#001f4d) and white color scheme
✅ **Smooth Animations**: Subtle scroll animations and hover effects
✅ **Sticky Navigation**: Fixed header that transitions on scroll
✅ **SEO Optimized**: Proper meta tags, semantic HTML, and SEO-friendly structure

## Sections Included

1. **Hero Section** - Bold headline, subheadline, and CTA button
2. **Services** - 4 service offerings (Capital Raising, M&A, Strategic Financing, Investor Relations)
3. **How We Work** - 4-step process visualization
4. **Track Record** - Key statistics and metrics
5. **Case Studies** - Success stories with testimonials
6. **About Us** - Experience, global reach, and differentiators
7. **Team** - Team member showcase (placeholder images)
8. **Contact** - Contact form with validation and contact information
9. **Footer** - Legal links, social icons, and address

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see the website.

### Production Build
```bash
npm run build
npm start
```

## Customization

### Updating Colors
Colors are defined in:
- `tailwind.config.mjs` - Tailwind color configuration
- `app/globals.css` - CSS variables

### Updating Content
All content is managed in:
- `app/contexts/LanguageContext.tsx` - All bilingual text content

To update content:
1. Open `app/contexts/LanguageContext.tsx`
2. Find the translation key you want to update
3. Modify the text in the `translations` object for both `en` and `tr`

### Adding Team Photos
1. Add team member images to `public/images/team/`
2. Update `app/components/TeamSection.tsx`
3. Replace emoji placeholders with actual image paths:
   ```tsx
   <img src="/images/team/member-name.jpg" alt="Member Name" />
   ```

### Updating Contact Information
Edit contact details in:
- `app/components/ContactSection.tsx` - Phone numbers and email
- `app/layout.tsx` - Metadata (update email in SEO if needed)

## File Structure

```
app/
├── components/          # React components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ServicesSection.tsx
│   ├── ProcessSection.tsx
│   ├── CaseStudiesSection.tsx
│   ├── TrackRecordSection.tsx
│   ├── AboutSection.tsx
│   ├── TeamSection.tsx
│   ├── ContactSection.tsx
│   └── ContactForm.tsx
├── contexts/           # React contexts
│   └── LanguageContext.tsx
├── privacy/           # Privacy Policy page
├── terms/             # Terms of Service page
├── layout.tsx         # Root layout with metadata
└── page.tsx           # Homepage

Documentation/
├── STYLE_GUIDE.md     # Complete style guide
├── CONTENT_GUIDE.md   # All content organized by section
├── SEO_METADATA.md    # SEO information and recommendations
└── QUICK_START.md     # This file
```

## Next Steps

1. **Add Real Images**: Replace placeholder emojis with actual team photos and professional imagery
2. **Backend Integration**: Connect contact form to email service or backend API
3. **Analytics**: Add Google Analytics or other tracking
4. **Content Updates**: Customize content in LanguageContext with actual company information
5. **Performance**: Optimize images and implement lazy loading
6. **Testing**: Test across different browsers and devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Context** - State management for language switching

## Support

For questions or customization needs, refer to:
- `STYLE_GUIDE.md` - Design system and styling guidelines
- `CONTENT_GUIDE.md` - All content in both languages
- `SEO_METADATA.md` - SEO optimization guidelines

---

**Note**: This is a production-ready template. Update contact information, team photos, and customize content to match your specific needs.


