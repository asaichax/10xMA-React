export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  color?: string
}

export interface Industry {
  name: string
  icon: string
}

export interface PortfolioItem {
  id: string
  title: string
  type: string
  description: string
  image: string
  videoUrl: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  phone?: string
  budgetRange: string
  projectType: string
  message: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
  slug: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: strings
  }
}

export interface HeroSection {
  title: string
  subtitle: string
  description: string
  cta: {
    primary: string
    secondary: string
  }
  image?: string
}

export interface ValueProp {
  id: string
  title: string
  description: string
  icon: string
}

export interface SocialProof {
  logos: string[]
  testimonials: Testimonial[]
  stats: {
    label: string
    value: string
  }[]
}
