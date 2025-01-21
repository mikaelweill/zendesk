'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@/lib/supabase'

export default function Login() {
  const supabase = createClient()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">Welcome to Help Desk - Agent Portal</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#4f46e5',  // Indigo color for agent portal
                  brandAccent: '#4338ca'
                }
              }
            }
          }}
          providers={['google', 'github']}
          redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`}
        />
      </div>
    </div>
  )
} 