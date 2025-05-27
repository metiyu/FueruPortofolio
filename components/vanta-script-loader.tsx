// components/VantaScriptLoader.tsx
'use client'

import Script from 'next/script';

export default function VantaScriptLoader() {
    return (
        <Script
            id="vanta-loader"
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js" // Local copy or CDN
            strategy="beforeInteractive"
            onLoad={() => {
                console.log('Vanta loaded globally');
            }}
        />
    );
}