import { Metadata } from 'next'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Sign In - OrderHub',
  description: 'Sign in to your restaurant management dashboard',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">OrderHub</h1>
          <p className="text-gray-600">Restaurant Management Made Simple</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
