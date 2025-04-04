import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Dear Locals',
  description: 'Yerel işletmeleri destekleyen topluluk projesi'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='tr'>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
