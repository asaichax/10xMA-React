import type { SiteConfig, HeroSection, ValueProp, Feature, Testimonial, FAQ, PricingPlan } from '../types'

export const siteConfig: SiteConfig = {
  name: "10XMA",
  description: "Creative Production & Media Agency - From Brand Campaigns to social media content, films, vertical series, podcasts, and branded storytelling — we do it all.",
  url: "https://10xma.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/10xma",
    github: "https://github.com/10xma",
    linkedin: "https://linkedin.com/company/10xma",
  },
}

export const navigation = [
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Work", href: "#work" },
  { title: "Packages", href: "#packages" },
  { title: "Team", href: "#team" },
  { title: "Contact", href: "#contact" },
]

export const heroSection: HeroSection = {
  title: "Creative Production & Media Agency",
  subtitle: "Toronto-Based Full-Service Production",
  description: "From Brand Campaigns to social media content, films, vertical series, podcasts, and branded storytelling — we do it all.",
  cta: {
    primary: "Let's Create Together",
    secondary: "View Our Work",
  },
  image: "/hero-video-reel.jpg",
}

export const valueProps: ValueProp[] = [
  {
    id: "1",
    title: "Flexible Pricing",
    description: "We work with small-scale and large-scale budgets alike, offering custom quotes that fit your needs.",
    icon: "DollarSign",
  },
  {
    id: "2",
    title: "In-House Team",
    description: "Our collective of passionate creatives covers the full production pipeline — so you don't need to juggle multiple vendors.",
    icon: "Users",
  },
  {
    id: "3",
    title: "Full-Service Production",
    description: "From concept development to final edit, we handle everything: directing, filming, sound, editing, and post-production.",
    icon: "Video",
  },
]

export const services: Feature[] = [
  {
    id: "1",
    title: "Films & Short Films",
    description: "Scripted projects, creative storytelling, indie films, and cinematic productions.",
    icon: "Film",
    color: "blue",
  },
  {
    id: "2",
    title: "Podcasts & YouTube Shows",
    description: "End-to-end production, from concept to publishing, with full audio and video support.",
    icon: "Mic",
    color: "purple",
  },
  {
    id: "3",
    title: "Social Media Content",
    description: "Reels, TikToks, vertical video campaigns, and vertical short series for all platforms.",
    icon: "Smartphone",
    color: "pink",
  },
  {
    id: "4",
    title: "Corporate & Professional",
    description: "Training videos, recruitment content, explainers, and internal communications.",
    icon: "Building2",
    color: "gray",
  },
  {
    id: "5",
    title: "Real Estate Showcases",
    description: "Property tours, lifestyle branding, and realtor promotional content.",
    icon: "Home",
    color: "green",
  },
  {
    id: "6",
    title: "Music & Creators",
    description: "Music videos, performance reels, and artist campaign content.",
    icon: "Music",
    color: "orange",
  },
  {
    id: "7",
    title: "Events & Launches",
    description: "Store openings, conferences, live coverage, and festival documentation.",
    icon: "Calendar",
    color: "red",
  },
  {
    id: "8",
    title: "Nonprofit & Community",
    description: "Awareness campaigns, fundraising videos, and community storytelling.",
    icon: "Heart",
    color: "rose",
  },
  {
    id: "9",
    title: "Hospitality & Lifestyle",
    description: "Restaurants, hotels, travel content, and local experience showcases.",
    icon: "Utensils",
    color: "amber",
  },
  {
    id: "10",
    title: "Education & Training",
    description: "Online courses, workshops, and e-learning content production.",
    icon: "GraduationCap",
    color: "indigo",
  },
]

export const industries = [
  { name: "Small Business", icon: "Store" },
  { name: "Realtors", icon: "Home" },
  { name: "Corporates", icon: "Building2" },
  { name: "Nonprofits", icon: "Heart" },
  { name: "Events", icon: "Calendar" },
  { name: "Creators", icon: "User" },
  { name: "Music", icon: "Music" },
  { name: "Hospitality", icon: "Utensils" },
  { name: "Education", icon: "GraduationCap" },
]

export const portfolioItems = [
  {
    id: "1",
    title: "The Yash Show",
    type: "Podcast",
    description: "Podcast & YouTube series with Toronto's Rising Stars",
    image: "/portfolio/yash-show.jpg",
    videoUrl: "https://youtube.com/watch?v=example1",
  },
  {
    id: "2",
    title: "Early Halloween",
    type: "Short Film",
    description: "Skit-based character comedy series",
    image: "/portfolio/early-halloween.jpg",
    videoUrl: "https://youtube.com/watch?v=example2",
  },
  {
    id: "3",
    title: "Human House",
    type: "Short Film",
    description: "Short film production with cinematic storytelling",
    image: "/portfolio/human-house.jpg",
    videoUrl: "https://youtube.com/watch?v=example3",
  },
  {
    id: "4",
    title: "Branded Content Campaign",
    type: "Social Media",
    description: "Full-service scripting, ideation, and campaign planning for local businesses",
    image: "/portfolio/branded-content.jpg",
    videoUrl: "https://youtube.com/watch?v=example4",
  },
]

export const teamMembers = [
  {
    id: "1",
    name: "Director",
    role: "Creative Director",
    bio: "Leads the creative vision and storytelling approach for all projects.",
    image: "/team/director.jpg",
  },
  {
    id: "2",
    name: "Writer",
    role: "Content Strategist",
    bio: "Develops compelling narratives and scripts that connect with audiences.",
    image: "/team/writer.jpg",
  },
  {
    id: "3",
    name: "Producer",
    role: "Project Manager",
    bio: "Oversees production timelines, budgets, and client communication.",
    image: "/team/producer.jpg",
  },
  {
    id: "4",
    name: "Videographer",
    role: "Cinematographer",
    bio: "Captures stunning visuals with professional equipment and techniques.",
    image: "/team/videographer.jpg",
  },
  {
    id: "5",
    name: "Editor",
    role: "Post-Production Specialist",
    bio: "Brings projects to life through editing, color grading, and motion graphics.",
    image: "/team/editor.jpg",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Small Business Owner",
    company: "Local Restaurant",
    content: "10XMA transformed our social media presence. Their content strategy and production quality helped us grow our following by 300% in just 3 months.",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Real Estate Agent",
    company: "Toronto Real Estate",
    content: "The property showcase videos they created for me are absolutely stunning. My listings now get 5x more views and inquiries.",
    rating: 5,
    avatar: "/avatars/michael.jpg",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Tech Startup",
    content: "From concept to final edit, 10XMA delivered exceptional corporate videos that perfectly captured our brand story.",
    rating: 5,
    avatar: "/avatars/emily.jpg",
  },
]

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of projects do you handle?",
    answer: "We handle everything from social media content and commercials to short films, podcasts, corporate videos, real estate showcases, and more. If it needs to be filmed, scripted, or shared online — we do it.",
  },
  {
    id: "2",
    question: "How does your pricing work?",
    answer: "We offer flexible pricing based on your specific needs. We start with an email consultation, schedule a call to discuss your goals and budget, then create a tailored quote that fits your project scope.",
  },
  {
    id: "3",
    question: "Do you offer ongoing content packages?",
    answer: "Yes! We offer monthly retainers including Starter, Growth, and Premium packages with different levels of content production, from 4-6 social videos per month to full-scale production support.",
  },
  {
    id: "4",
    question: "What's included in your full-service production?",
    answer: "Our full-service approach includes creative ideation, storyboarding, production (filming, sound, directing), post-production (editing, color grading), and marketing support for content distribution.",
  },
  {
    id: "5",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. Social media content can be delivered in 1-2 weeks, while larger productions like short films or corporate videos typically take 4-8 weeks from concept to final delivery.",
  },
  {
    id: "6",
    question: "Do you work with clients outside of Toronto?",
    answer: "While we're based in Toronto, we work with clients across Canada and internationally. We can travel for shoots or work remotely depending on your project needs.",
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: 0,
    currency: "USD",
    period: "month",
    description: "Best for Small Businesses & Creators",
    features: [
      "4–6 social media videos (Reels, or TikToks) per month",
      "1 branded video or promo",
      "Basic editing & captions",
      "1 planning session per month",
    ],
    cta: "Book a Discovery Call",
  },
  {
    id: "growth",
    name: "Growth Package",
    price: 0,
    currency: "USD",
    period: "month",
    description: "Best for Growing Brands & Realtors",
    features: [
      "8–10 social media videos per month",
      "2 branded videos (promo, explainer, or showcase)",
      "Podcast or YouTube episode production support (1 per month)",
      "Advanced editing (motion graphics, color correction)",
      "Monthly strategy session + analytics review",
    ],
    popular: true,
    cta: "Book a Discovery Call",
  },
  {
    id: "premium",
    name: "Premium Package",
    price: 0,
    currency: "USD",
    period: "month",
    description: "Best for Agencies, Corporates & Large-Scale Brands",
    features: [
      "12–16 social media videos per month",
      "3–4 branded videos (ads, corporate, real estate, or creative short)",
      "Full podcast/YouTube production (up to 2 episodes per month)",
      "Multi-camera shoots, cinematic editing, and advanced post-production",
      "Marketing support: campaign strategy, distribution guidance, performance review",
      "Priority scheduling & dedicated project manager",
    ],
    cta: "Book a Discovery Call",
  },
]

export const budgetRanges = [
  "<$2,000",
  "$2,000–$5,000", 
  "$5,000–$10,000",
  "$10,000+"
]

export const projectTypes = [
  "Social Media",
  "Film",
  "Podcast", 
  "Corporate",
  "Real Estate",
  "Other"
]
