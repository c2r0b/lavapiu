import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <header className="mx-3 z-50 fixed left-0 right-0 flex justify-between border-t-2 border-blue-200 dark:border-orange-300 cursor-default bg-white bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200 shadow-md py-3 px-6 h-20 dark:bg-gray-800 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:shadow-lg rounded-b-3xl">
          <Image
            className="relative "
            src="/logo-testo.png"
            alt="Next.js Logo"
            width={90}
            height={30}
            priority
          />
          <div>
            <div className={`m-2 mr-4 p-2 h-10 float-left rounded-lg bg-gray-100 shadow-md dark:bg-gray-800`}>
              <p className="text-dark text-sm pt-1 dark:text-white">
                Lun/Dom 7.00 - 23.00
              </p>
            </div>
            <div className={`m-2 p-2 h-10 float-left rounded-lg ${isOpen ? 'bg-green-500' : 'bg-red-500'} shadow-md`}>
              <p className="text-white font-semibold text-md">
                {isOpen ? 'Aperto' : 'Chiuso'} Ora
              </p>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
