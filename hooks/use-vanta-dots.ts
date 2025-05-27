// hooks/useVantaDots.ts
import { useEffect, RefObject } from 'react';

let vantaEffect: any;

export const useVantaDots = (ref: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        if (!ref.current) return;

        const initializeVanta = () => {
            if (typeof window.VANTA !== 'undefined' && ref.current) {
                vantaEffect = window.VANTA.DOTS({
                    el: ref.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 1000,
                    minWidth: 200,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xfab54e,
                    backgroundColor: 0x111111,
                    spacing: 30.00,
                    showLines: false,
                });
            }
        };

        // Try immediately
        initializeVanta();

        // Fallback in case script loads later
        const checkInterval = setInterval(() => {
            if (typeof window.VANTA !== 'undefined') {
                clearInterval(checkInterval);
                initializeVanta();
            }
        }, 100);

        return () => {
            clearInterval(checkInterval);
            if (vantaEffect?.destroy) {
                vantaEffect.destroy();
                vantaEffect = null;
            }
        };
    }, [ref]);
};