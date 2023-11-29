import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "LavaPiù Livorno",
  description: "LavaPiù è la tua scelta ideale per lavanderia self-service a [City Name], aperta tutti i giorni dalle 7:00 alle 23:00. Goditi l'efficienza e l'affidabilità delle nostre macchine Miele Professional. Pulizia impeccabile e rispetto per l'ambiente in un ambiente confortevole e accogliente. Visita LavaPiù per un'esperienza di lavaggio superiore!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the current time, to set isOpen only from 7 to 23 from January 2024
  const now = new Date();
  const hours = now.getHours();
  const year = now.getFullYear();
  const isOpen = hours >= 7 && hours < 23 && year >= 2024;

  return (
    <html lang="it">
      <body className={inter.className}>
        <div className={`fixed left-0 z-50 right-0 ml-0 p-2 h-10 float-left text-center ${isOpen ? 'bg-green-500' : 'bg-red-500'} shadow-md`}>
          <p className="text-white font-semibold text-md">
            {isOpen ? 'Aperto' : 'Chiuso'} Ora
          </p>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
