import { Metadata } from 'next'
import { RegisterForm } from '@/components/auth/register-form'

export const metadata: Metadata = {
  title: 'Create Account - OrderHub',
  description: 'Create your restaurant management account',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">OrderHub</h1>
          <p className="text-gray-600">Start Managing Your Restaurant Today</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
