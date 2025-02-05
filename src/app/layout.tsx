import type { Metadata } from 'next'
import { Poppins } from "next/font/google"
import './globals.css'
import NavBar from '@/src/components/common/NavBar'
import FooterSection from '@/src/components/sections/FooterSection'
import { Toaster } from '@/src/components/ui/toaster'
import { AuthWrapper } from '@/src/components/ui/AuthWrapper'
import LoadingIndicator from '@/src/components/common/LoadingIndicator'
import { SearchProvider } from '@/src/context/searchContext'

export const metadata: Metadata = {
  title: 'Furniro Ecommerce',
  description: 'Get any furniture items on the fly',
}

const poppin = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppin.className} >
        <main className="bg-white">
          <AuthWrapper>
            <SearchProvider>
              <LoadingIndicator />
              <NavBar />
              {children}
              <Toaster />
              <div className="mt-[56px]">
                <FooterSection />
              </div>
            </SearchProvider>
          </AuthWrapper>
        </main>
      </body>
    </html>
  )
}