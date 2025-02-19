import { AuthProvider } from 'shared'
import { ChatWindow } from 'shared'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoCRM Agent Portal',
  description: 'Agent portal for AutoCRM',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider appType="agent">
          {children}
          <ChatWindow />
        </AuthProvider>
      </body>
    </html>
  )
}
