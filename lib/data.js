import {
  Users,
  BarChart3,
  Mail,
  PenTool,
  Eye,
  Calendar,
  Shield,
  Target,
  TrendingUp,
  Settings,
  Search,
  ImageIcon,
} from "lucide-react";

export const features = [
  {
    icon: PenTool,
    title: "Professional Content Creation",
    desc: "Create and publish professional posts, articles, and updates with AI-powered assistance",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Professional Network",
    desc: "Connect with professionals, build your network, and grow your influence",
    color: "from-green-500 to-yellow-500",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Track engagement, measure reach, and understand your audience with detailed insights",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "Plan and schedule your content for optimal engagement and consistency",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: ImageIcon,
    title: "Visual Content Tools",
    desc: "Transform and optimize images with AI-powered editing and enhancements",
    color: "from-red-500 to-purple-500",
  },
  {
    icon: Search,
    title: "Content Discovery",
    desc: "Discover trending topics, connect with thought leaders, and stay informed",
    color: "from-emerald-500 to-green-500",
  },
];

export const socialProofStats = [
  { metric: "50K+", label: "Professionals", icon: Users },
  { metric: "2M+", label: "Posts Published", icon: PenTool },
  { metric: "10M+", label: "Monthly Engagements", icon: Eye },
  { metric: "99.9%", label: "Platform Uptime", icon: Shield },
];

export const platformTabs = [
  {
    title: "Create & Share",
    icon: PenTool,
    description:
      "Publish professional content with AI-powered writing assistance and smart recommendations.",
    features: [
      "Rich text editor",
      "AI content enhancement",
      "Image optimization",
      "SEO-friendly formatting",
    ],
  },
  {
    title: "Network & Engage",
    icon: TrendingUp,
    description:
      "Build meaningful professional connections and engage with your industry community.",
    features: [
      "Follow professionals",
      "Comment & discuss",
      "Like and share posts",
      "Engagement analytics",
    ],
  },
  {
    title: "Grow & Analyze",
    icon: Settings,
    description:
      "Track your performance, understand your audience, and optimize your professional presence.",
    features: [
      "Audience insights",
      "Performance metrics",
      "Content scheduling",
      "Growth tracking",
    ],
  },
];
