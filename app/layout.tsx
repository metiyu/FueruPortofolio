import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import VantaScriptLoader from '@/components/vanta-script-loader'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    title: 'FueruTech',
    description: 'Where Businesses Grow Smarter',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                {/* Load Vanta and dependencies */}
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                    strategy="beforeInteractive"
                />
                <VantaScriptLoader />
            </head>
            <body>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
