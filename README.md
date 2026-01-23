# Personal Portfolio

A modern, high-performance portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features stunning animations, dark mode aesthetics, and professional design.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## ✨ Features

- 🎨 **Modern Dark Theme** with vibrant purple/blue gradients
- 💎 **Glassmorphism Effects** for premium feel
- ⚡ **Smooth Animations** with Framer Motion
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with comprehensive metadata
- ♿ **Accessible** with proper ARIA labels
- 🎯 **Type-Safe** with TypeScript
- 🚀 **Performance Optimized** with Next.js

## 📋 Sections

- **Hero**: Dynamic typing animation and gradient background
- **About**: Personal philosophy and professional highlights
- **Projects**: Interactive project showcase
- **Skills**: Categorized skills with animated progress bars
- **Contact**: Multiple contact methods
- **Footer**: Philosophy quote and social links

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

Edit `lib/data.ts` to customize:
- Personal details (name, email, etc.)
- Projects
- Skills
- Social links
- Contact methods

### Update Styles

Modify `tailwind.config.ts` and `app/globals.css` to change:
- Color scheme
- Animations
- Typography
- Spacing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### GitHub Pages

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
};
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `out` directory to GitHub Pages

## 🔒 Security Best Practices

- ✅ No sensitive data committed
- ✅ Environment variables properly configured
- ✅ `.env.local` in `.gitignore`
- ✅ Safe placeholder tokens in examples

## 📦 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── Footer.tsx      # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Projects.tsx    # Projects section
│       ├── Skills.tsx      # Skills section
│       └── Contact.tsx     # Contact section
├── lib/
│   ├── data.ts             # Portfolio content
│   └── types.ts            # TypeScript types
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🎯 Best Practices Followed

- ✅ Clean, readable code structure
- ✅ Component-based architecture
- ✅ Type-safe with TypeScript
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Accessibility standards
- ✅ Git best practices

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 💬 Philosophy

> "Loyalty is a two-way street. If I'm asking it from you, then you're getting it from me."

This portfolio represents:
- Quality craftsmanship
- Trust and professionalism
- Long-term collaboration mindset
- Commitment to excellence

---

Built with ❤️ using Next.js and modern web technologies.
