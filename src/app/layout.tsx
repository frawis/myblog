import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { getPreviewToken } from '~/sanity/lib/sanity.server.preview';
import { getSettings } from '~/sanity/lib/sanity.client';
import { PreviewBanner } from '~/components/previews/preview-banner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'frasty',
  description: 'my personal website',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const token = getPreviewToken();
  const settings = (await getSettings({ token })) || {
    menuItems: [],
    footer: [],
  };
  return (
    <html lang="de" className="bg-neutral-950 text-white">
      <body className={inter.className}>
        {token && <PreviewBanner />}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
