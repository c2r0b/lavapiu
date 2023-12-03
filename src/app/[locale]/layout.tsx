import '@/styles/globals.css'
import { useTranslations } from 'next-intl';
import {notFound} from 'next/navigation'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import {getTranslations} from 'next-intl/server';
import { locales } from '@/i18n/config'

import type { RootLayoutProps, MetadataParams } from '@/types/root'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({locale, namespace: 'metadata'});
 
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({
  children,
  params: {
    locale
  }
}: RootLayoutProps) {
  const t = useTranslations('status');

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Get the current time, to set isOpen only from 7 to 23 from January 2024
  const now = new Date();
  const hours = now.getHours();
  const year = now.getFullYear();
  const isOpen = hours >= 7 && hours < 23 && year >= 2024;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className={`fixed left-0 z-50 right-0 ml-0 p-2 h-10 float-left text-center ${isOpen ? 'bg-green-600' : 'bg-red-700'} shadow-md`}>
          <p className="text-white font-semibold text-md">
            { t(isOpen ? 'open' : 'close') }
          </p>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
