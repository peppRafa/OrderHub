import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Users, 
  Clock, 
  Shield,
  Smartphone,
  MessageCircle 
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Order Management',
      description: 'Streamline orders from dine-in, takeaway, delivery, and online channels'
    },
    {
      icon: Package,
      title: 'Inventory Control',
      description: 'Track stock levels, manage suppliers, and prevent waste with smart alerts'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Get insights into sales, popular items, and business performance'
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Role-based access control for owners, managers, and staff'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Live synchronization across all devices and locations'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with automatic backups'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Works perfectly on phones, tablets, and desktops'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Integration',
      description: 'Accept orders directly through WhatsApp Business'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">OrderHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Restaurant Management
          <br />
          <span className="text-blue-600">Made Simple</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Streamline your restaurant operations with our comprehensive SaaS solution. 
          Manage orders, inventory, staff, and analytics all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/register">
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Sign In to Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Restaurant
          </h3>
          <p className="text-lg text-gray-600">
            Powerful features designed specifically for restaurant owners and managers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Restaurant?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of restaurants already using OrderHub to streamline their operations
          </p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary">
              Start Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold">OrderHub</span>
          </div>
          <p className="text-gray-400">
            © 2024 OrderHub. All rights reserved. Restaurant Management Made Simple.
          </p>
        </div>
      </footer>
    </div>
  )
}
