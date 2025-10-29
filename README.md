# AICreaterX 🚀

> AI-Powered Content Creation Platform

AICreaterX is a modern, full-stack content creation platform that leverages artificial intelligence to help creators write, publish, and grow their content effortlessly.

![AICreaterX Platform](public/banner.png)

## ✨ Features

- 🤖 **AI-Powered Content Generation** - Generate high-quality blog posts using Perplexity AI
- ✍️ **Rich Text Editor** - Full-featured WYSIWYG editor with React Quill
- 🖼️ **Image Management** - Upload and manage images with ImageKit CDN
- 👥 **User Authentication** - Secure sign-in/sign-up with Clerk
- 📊 **Analytics Dashboard** - Track views, likes, comments, and followers
- 🌐 **Public Profiles** - Share your content with custom profile pages
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Real-time Updates** - Powered by Convex for instant data sync
- 🌙 **Dark Mode** - Eye-friendly dark theme

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with modern hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible component library

### Backend & Services
- **Convex** - Serverless backend with real-time database
- **Clerk** - Authentication and user management
- **Perplexity AI** - Advanced AI content generation
- **ImageKit** - Image CDN and storage

### Development Tools
- **Turbopack** - Ultra-fast bundler
- **ESLint** - Code linting
- **React Hook Form + Zod** - Form validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Accounts for: Clerk, Convex, ImageKit, Perplexity AI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/aicreaterx.git
   cd aicreaterx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   
   ```env
   # Convex Backend
   CONVEX_DEPLOYMENT=your_deployment_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   CLERK_JWT_ISSUER_DOMAIN=your_clerk_domain
   
   # ImageKit
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_url
   
   # Perplexity AI
   PERPLEXITY_API_KEY=your_perplexity_key
   ```

4. **Deploy Convex backend**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
aicreaterx/
├── app/                      # Next.js app directory
│   ├── (auth)/              # Authentication pages
│   ├── (public)/            # Public pages (feed, profiles)
│   ├── dashboard/           # Dashboard pages
│   └── api/                 # API routes
├── components/              # React components
│   ├── ui/                  # Shadcn UI components
│   └── ...                  # Custom components
├── convex/                  # Convex backend
│   ├── schema.js           # Database schema
│   └── ...                 # Backend functions
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── public/                  # Static assets
```

## 🎨 Features Breakdown

### AI Content Generation
- Generate blog posts from titles
- Improve existing content (expand, simplify, enhance)
- Powered by Perplexity's advanced AI models

### Dashboard
- Create and manage posts
- View analytics and statistics
- Track followers and engagement
- Schedule posts for future publication

### Content Editor
- Rich text editing with React Quill
- Image upload and insertion
- Auto-save drafts
- Category and tag management

### Public Features
- User profiles with custom usernames
- Public feed to discover content
- Like, comment, and follow system
- View tracking and analytics

## 🔒 Security

- Secure authentication with Clerk
- Environment variable protection
- Server-side API calls
- Convex auth integration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ by [Your Name]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for deployment platform
- Clerk for authentication
- Convex for the backend
- Perplexity for AI capabilities
- ImageKit for image management

---

**⭐ Star this repo if you find it helpful!**
