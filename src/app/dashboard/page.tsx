'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  TrendingDown,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react'

// Mock data for demonstration
const mockMetrics = {
  todayRevenue: 2847.50,
  revenueChange: 12.5,
  todayOrders: 47,
  ordersChange: -3.2,
  lowStockItems: 8,
  stockChange: 2,
  activeStaff: 12,
  staffChange: 0
}

const mockRecentOrders = [
  {
    id: '20240820001',
    customer: 'John Smith',
    type: 'DINE_IN',
    status: 'PREPARING',
    total: 45.50,
    time: '2 minutes ago'
  },
  {
    id: '20240820002',
    customer: 'Sarah Johnson',
    type: 'TAKEAWAY',
    status: 'READY',
    total: 28.75,
    time: '5 minutes ago'
  },
  {
    id: '20240820003',
    customer: 'Mike Wilson',
    type: 'DELIVERY',
    status: 'COMPLETED',
    total: 67.25,
    time: '12 minutes ago'
  },
  {
    id: '20240820004',
    customer: 'Lisa Brown',
    type: 'WEB_ORDER',
    status: 'PENDING',
    total: 34.00,
    time: '15 minutes ago'
  }
]

const mockLowStockItems = [
  { name: 'Tomatoes', current: 2, minimum: 10, unit: 'kg' },
  { name: 'Chicken Breast', current: 5, minimum: 15, unit: 'kg' },
  { name: 'Mozzarella Cheese', current: 1, minimum: 8, unit: 'kg' },
  { name: 'Olive Oil', current: 0.5, minimum: 2, unit: 'liters' },
]

export default function DashboardPage() {
  const { user, isOwner, isManager } = useAuth()

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800'
      case 'PREPARING':
        return 'bg-blue-100 text-blue-800'
      case 'READY':
        return 'bg-green-100 text-green-800'
      case 'COMPLETED':
        return 'bg-gray-100 text-gray-800'
      case 'CANCELLED':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getOrderTypeColor = (type: string) => {
    switch (type) {
      case 'DINE_IN':
        return 'bg-purple-100 text-purple-800'
      case 'TAKEAWAY':
        return 'bg-orange-100 text-orange-800'
      case 'DELIVERY':
        return 'bg-blue-100 text-blue-800'
      case 'WEB_ORDER':
        return 'bg-green-100 text-green-800'
      case 'WHATSAPP':
        return 'bg-emerald-100 text-emerald-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatOrderType = (type: string) => {
    return type.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ')
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.user_metadata?.name || 'User'}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening at your restaurant today.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Today's Revenue */}
        {(isOwner() || isManager()) && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${mockMetrics.todayRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                {mockMetrics.revenueChange > 0 ? (
                  <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                )}
                <span className={mockMetrics.revenueChange > 0 ? 'text-green-600' : 'text-red-600'}>
                  {Math.abs(mockMetrics.revenueChange)}%
                </span>
                <span className="ml-1">from yesterday</span>
              </p>
            </CardContent>
          </Card>
        )}

        {/* Today's Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.todayOrders}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {mockMetrics.ordersChange > 0 ? (
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
              )}
              <span className={mockMetrics.ordersChange > 0 ? 'text-green-600' : 'text-red-600'}>
                {Math.abs(mockMetrics.ordersChange)}%
              </span>
              <span className="ml-1">from yesterday</span>
            </p>
          </CardContent>
        </Card>

        {/* Low Stock Items */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Alerts</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{mockMetrics.lowStockItems}</div>
            <p className="text-xs text-muted-foreground">
              Items need restocking
            </p>
          </CardContent>
        </Card>

        {/* Active Staff */}
        {(isOwner() || isManager()) && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockMetrics.activeStaff}</div>
              <p className="text-xs text-muted-foreground">
                Currently working
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recent Orders and Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Orders
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardTitle>
            <CardDescription>
              Latest orders from all channels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">#{order.id}</p>
                      <p className="text-xs text-gray-500">{order.customer}</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Badge variant="secondary" className={getOrderTypeColor(order.type)}>
                        {formatOrderType(order.type)}
                      </Badge>
                      <Badge variant="secondary" className={getOrderStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">${order.total.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                Low Stock Items
              </span>
              <Button variant="outline" size="sm">
                Manage Inventory
              </Button>
            </CardTitle>
            <CardDescription>
              Items that need immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockLowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg border-orange-200 bg-orange-50">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Current: {item.current} {item.unit}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-orange-600 font-medium">
                      Need: {item.minimum} {item.unit}
                    </p>
                    <Button size="sm" variant="outline" className="mt-1">
                      Restock
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks you can perform right away
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <ShoppingCart className="h-6 w-6" />
              <span>New Order</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Package className="h-6 w-6" />
              <span>Add Stock</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Staff Schedule</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
