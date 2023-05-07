import './globals.css'
import { Archivo, MuseoModerno } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { getPreviewToken } from '~/sanity/lib/sanity.server.preview'
import { getSettings } from '~/sanity/lib/sanity.client'
import { PreviewBanner } from '~/components/previews/preview-banner'
import { cn } from '~/lib/utils'
import { cookies } from 'next/headers'
import { CookieConsent } from '~/components/shared/cookie-consent'
import { ThemeProvider } from '~/components/shared/theme-provider'

const museo = MuseoModerno({ subsets: ['latin'], variable: '--font-heading' })
const archivo = Archivo({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'frasty',
  description: 'my personal website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const token = getPreviewToken()
  const settings = (await getSettings({ token })) || {
    menuItems: [],
    footer: [],
  }

  const setCookie = async () => {
    'use server'
    //@ts-expect-error
    await cookies().set({
      name: 'consent',
      value: 'true',
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === 'production',
    })
  }

  const isFirstVisit = !cookieStore?.has('consent')

  return (
    <html
      lang="de"
      className="bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white"
      suppressHydrationWarning
    >
      <body
        className={cn(museo.variable, archivo.variable, 'relative font-sans')}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-primary fixed inset-0 isolate bg-white dark:bg-neutral-950 dark:text-white lg:absolute" />
          <div className="absolute inset-0 bg-white/95 dark:bg-neutral-950/40" />
          {token && <PreviewBanner />}

          <div className="relative">{children}</div>

          {isFirstVisit && <CookieConsent setCookie={setCookie} />}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
