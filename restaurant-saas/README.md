# OrderHub - Restaurant Management SaaS

A comprehensive cloud-based restaurant management solution that streamlines inventory control, order management, and multi-channel customer interactions. Built with modern web technologies for scalability and reliability.

## 🚀 Features

### Core Functionality
- **🔐 Authentication & Authorization** - Role-based access control (Owner, Manager, Kitchen Staff, Wait Staff)
- **📊 Real-time Dashboard** - Live metrics, revenue tracking, and business insights
- **📦 Inventory Management** - Stock tracking, low stock alerts, and supplier management
- **🛒 Order Management** - Unified order processing from multiple channels
- **📱 Mobile-First Design** - Responsive interface optimized for all devices
- **🔄 Real-time Updates** - Live synchronization across all connected devices

### Multi-Channel Support
- **🍽️ Dine-in Orders** - Table management and in-restaurant ordering
- **🥡 Takeaway & Delivery** - Pickup and delivery order processing
- **🌐 Web Orders** - Customer-facing online ordering system
- **📱 WhatsApp Integration** - Accept orders through WhatsApp Business API

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **State Management**: Zustand + React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts (for analytics)

### Backend & Database
- **Runtime**: Node.js with TypeScript
- **API**: Next.js API Routes + tRPC (type-safe APIs)
- **Database**: Supabase (PostgreSQL + Auth + Real-time)
- **Authentication**: Supabase Auth with Row Level Security
- **File Storage**: Supabase Storage
- **Real-time**: Supabase Real-time subscriptions

### Infrastructure
- **Hosting**: Render (Free tier deployment)
- **Database**: Supabase (Free tier - 500MB PostgreSQL)
- **CDN**: Render's built-in CDN
- **CI/CD**: GitHub Actions + Render auto-deploy

## 📋 Database Schema

The application includes 8 core tables:
- **restaurants** - Restaurant information and settings
- **users** - User profiles with role-based permissions
- **categories** - Menu category organization
- **menu_items** - Restaurant menu with pricing and availability
- **inventory_items** - Stock management and tracking
- **stock_transactions** - Inventory movement history
- **orders** - Order processing and status tracking
- **order_items** - Individual items within orders

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- GitHub account
- Render account (for deployment)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/restaurant-saas.git
   cd restaurant-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXTAUTH_SECRET=jqYP0ygjLh1mDmKzr0lhYFgLM766j+f30DlxJ2L24ps=
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Set up Supabase database**
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the migration file: `supabase/migrations/20240101000000_initial_schema.sql`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open the application**
   Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Deploy to Render (Free Tier)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy OrderHub Restaurant SaaS"
   git push origin main
   ```

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml`
   - Set environment variables in Render dashboard
   - Deploy automatically

3. **Configure Supabase**
   - Add your Render URL to Supabase Authentication settings
   - Update Site URL and Redirect URLs

### Environment Variables Required
Set these in your Render dashboard:

```
NEXT_PUBLIC_SUPABASE_URL = your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY = your_service_role_key
NEXTAUTH_URL = https://your-app-name.onrender.com
```

## 🎯 User Roles & Permissions

- **👑 Owner** - Full access to all features and settings
- **👨‍💼 Manager** - Access to operations, staff, and analytics
- **👨‍🍳 Kitchen Staff** - Order management and inventory access
- **👨‍💼 Wait Staff** - Order taking and basic dashboard access

## 📱 User Interface

### Landing Page
- Professional branding and feature showcase
- Clear call-to-action for registration
- Mobile-responsive design

### Authentication
- Secure login/register with password validation
- Role-based access control
- Protected route middleware

### Dashboard
- Real-time metrics (revenue, orders, stock alerts)
- Recent orders display with status tracking
- Quick action buttons for common tasks
- Mobile-optimized sidebar navigation

## 🔐 Security Features

- **Row Level Security (RLS)** - Database-level access control
- **Authentication** - Supabase Auth with secure session management
- **Input Validation** - Zod schemas for all user inputs
- **HTTPS Enforcement** - Secure connections in production
- **Role-based Permissions** - Granular access control

## 📊 Development Status

**Current Phase**: Phase 1 MVP (85% Complete)

### ✅ Completed Features
- ✅ Project setup with Next.js 14 + TypeScript
- ✅ Supabase integration with authentication
- ✅ Complete database schema with RLS
- ✅ User authentication (login/register)
- ✅ Responsive dashboard with sidebar navigation
- ✅ Real-time metrics display
- ✅ Role-based access control
- ✅ Mobile-optimized UI
- ✅ Render deployment configuration

### 🔄 In Progress
- ⏳ Inventory management CRUD operations
- ⏳ Order management system
- ⏳ tRPC integration for type-safe APIs

### 📋 Planned Features (Phase 2)
- Menu management system
- Customer web app with ordering
- WhatsApp Business API integration
- Advanced analytics and reporting
- Payment processing with Stripe

## 🤝 Contributing

This project is built with AI-assisted development using Cursor IDE. The development follows a structured approach with:

- TypeScript for type safety
- Component-driven architecture
- Comprehensive error handling
- Performance optimization
- Security best practices

## 📄 License

This project is proprietary software for restaurant management.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for restaurant owners who want to focus on great food, not complex software.**
