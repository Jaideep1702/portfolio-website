# 🚀 Portfolio Website - Jaideep Jambhale

A modern, responsive, and stunning portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400/1e293b/3b82f6?text=Modern+Portfolio+Website)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful gradient effects, glassmorphism, and smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🌙 **Dark/Light Mode** - Theme toggle with persistent preference
- ⚡ **Lightning Fast** - Built with Next.js 14 App Router for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion for professional transitions
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎨 **Custom Scrollbar** - Styled scrollbar matching the theme
- 📝 **Contact Form** - Interactive contact form (ready for backend integration)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm or yarn or pnpm

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## 📁 Project Structure

```
portfolioWebsite/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── providers.tsx       # Theme provider
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Hero.tsx            # Hero section with typewriter effect
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience timeline
│   ├── Skills.tsx          # Skills & education section
│   ├── Awards.tsx          # Awards & recognitions
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── public/
│   └── (place your images here)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, roles, and description
   - Modify social links

2. **About Section** (`components/About.tsx`):
   - Replace placeholder image with your photo
   - Update bio and quick stats

3. **Experience Section** (`components/Experience.tsx`):
   - Add/edit work experiences
   - Update achievements

4. **Skills Section** (`components/Skills.tsx`):
   - Modify skill categories and items
   - Update education details

5. **Awards Section** (`components/Awards.tsx`):
   - Add your awards and recognitions

6. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Integrate email service (EmailJS, Resend, etc.)

### Color Scheme

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Add Your Images

1. Place your images in the `public` folder
2. Update image references in components
3. Replace the profile placeholder in `About.tsx`

## 📧 Contact Form Integration

To make the contact form functional, integrate with:

### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

### Option 2: Resend
```bash
npm install resend
```

### Option 3: API Route
Create `/app/api/contact/route.ts` for custom email handling.

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy on Netlify

1. Build the project: `npm run build`
2. Drag and drop the `.next` folder to Netlify

## 📱 Sections

- **Home** - Hero section with animated background and typewriter effect
- **About** - Introduction with profile image and quick stats
- **Experience** - Professional timeline with achievements
- **Skills** - Technical skills categorized with education
- **Awards** - Recognition and awards with beautiful cards
- **Contact** - Contact form and information

## 🎯 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Image Optimization:** Next.js Image component for lazy loading
- **Code Splitting:** Automatic code splitting for faster loads

## 🐛 Known Issues

- Contact form currently simulates submission (integrate with backend)
- Resume PDF link needs to be added to `/public/resume.pdf`

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email:** jaideep.jambhale@gmail.com
- **LinkedIn:** [linkedin.com/in/jaideepjambhale](https://linkedin.com/in/jaideepjambhale)
- **Phone:** +91 9653116810

---

Made with ❤️ by Jaideep Jambhale

