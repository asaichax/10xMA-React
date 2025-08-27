# 10xMA - Marketing Website

A modern, responsive single-page application (SPA) for marketing automation platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, editorial design with subtle animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Accessible**: WCAG 2.1 AA compliant with proper semantic HTML
- **Performance**: Optimized for Core Web Vitals with Lighthouse scores ≥ 95
- **SEO Optimized**: Meta tags, structured data, and proper semantic markup
- **Form Validation**: Contact form with React Hook Form and Zod validation
- **Smooth Animations**: Framer Motion for tasteful micro-interactions

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display, Cormorant

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marketing-spa
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
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, Input, etc.)
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ValueProps.tsx  # Value propositions
│   ├── Features.tsx    # Features showcase
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Pricing.tsx     # Pricing plans
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── content/            # Content and configuration
│   └── site-config.ts  # Site content, navigation, data
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── styles/             # Global styles
├── assets/             # Static assets
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Background**: Light/Dark theme support
- **Text**: High contrast for accessibility
- **Accent**: Subtle gradients and highlights

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Display**: Cormorant (serif)

### Spacing
- **Base unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb config with custom rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Standard commit message format

### Component Guidelines

1. **Props Interface**: Define clear TypeScript interfaces
2. **Accessibility**: Include ARIA labels and semantic HTML
3. **Responsive**: Mobile-first approach
4. **Performance**: Lazy load when appropriate
5. **Testing**: Write tests for critical components

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** ratios
- **Focus indicators** visible
- **Reduced motion** support

## 🚀 Performance

### Optimization Techniques

- **Code splitting**: Lazy load components
- **Image optimization**: Responsive images with srcSet
- **Font loading**: Preload critical fonts
- **Bundle analysis**: Monitor bundle size
- **Caching**: Proper cache headers

### Lighthouse Targets

- **Performance**: ≥ 95
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

## 📊 Analytics & SEO

### SEO Features

- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter sharing
- **Structured Data**: JSON-LD markup
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine directives

### Analytics Integration

- **Google Analytics 4**: Ready for integration
- **Plausible**: Privacy-focused analytics option
- **Custom Events**: Track user interactions

## 🔌 API Integration

### Contact Form

The contact form is currently set up with a mock API endpoint. To integrate with a real backend:

1. Update the `onSubmit` function in `Contact.tsx`
2. Replace the mock API call with your actual endpoint
3. Add proper error handling
4. Implement CSRF protection if needed

```typescript
// Example API integration
const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle network error
  }
}
```

## 🧪 Testing

### Test Structure

```
tests/
├── components/        # Component tests
├── utils/            # Utility function tests
└── setup.ts          # Test configuration
```

### Testing Guidelines

- **Unit tests**: Test individual components
- **Integration tests**: Test component interactions
- **Accessibility tests**: Test with screen readers
- **Visual regression**: Test UI consistency

## 📦 Deployment

### Build Process

1. **Production build**
   ```bash
   npm run build
   ```

2. **Preview build**
   ```bash
   npm run preview
   ```

### Deployment Options

- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **AWS S3**: Static site hosting
- **GitHub Pages**: Free hosting for open source

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=https://api.10xma.com
VITE_ANALYTICS_ID=your-analytics-id
VITE_SENTRY_DSN=your-sentry-dsn
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Commit Guidelines

- **feat**: New features
- **fix**: Bug fixes
- **docs**: Documentation changes
- **style**: Code style changes
- **refactor**: Code refactoring
- **test**: Test additions/changes
- **chore**: Build process changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.10xma.com](https://docs.10xma.com)
- **Email**: hello@10xma.com
- **Twitter**: [@10xma](https://twitter.com/10xma)
- **Issues**: [GitHub Issues](https://github.com/10xma/marketing-spa/issues)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern SaaS websites
- **Icons**: [Lucide](https://lucide.dev)
- **Fonts**: Google Fonts
- **UI Patterns**: Radix UI primitives

---

Built with ❤️ by the 10xMA team
# 10xMA-React
